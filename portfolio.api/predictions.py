# -*- coding: utf-8 -*-
import numpy as np
import tensorflow as tf
import cv2
import pandas as pd
from tensorflow.keras.layers import Dense
from tensorflow.keras.models import Model
from tensorflow.keras.optimizers import Adam
from tensorflow.keras.layers import concatenate
from tensorflow.keras import backend as K
import numpy as np
import argparse
import locale
import os

def normalize_labels(labels):
    labels_np = np.array(labels)
    return labels_np / labels_np.sum()


def calc_mean_score(score_dist, labels):
    score_dist = normalize_labels(score_dist)
    labels = labels.fillna(0)
    labels = labels.astype(float)
    return (sum(score_dist*np.array(labels)))

def predict_one_card(cardNumber: int):

    model = tf.keras.models.load_model(r'./assets/TestPictureLibrary/Model', custom_objects={'earth_movers_distance': earth_movers_distance})
    
    frontInput = np.empty((1, 1496, 1000, 3))
    backInput = np.empty((1, 1496, 1000, 3))
    front = cv2.imread("./assets/TestPictureLibrary/%s/Front.jpg" % cardNumber)
    print(front.shape)
    frontResized = cv2.resize(front, (1000, 1496), interpolation=cv2.INTER_CUBIC)
    frontResized = frontResized / 255.0
    
    back = cv2.imread("./assets/TestPictureLibrary/{}/Back.jpg".format(cardNumber))
    backResized = cv2.resize(front, (1000, 1496), interpolation=cv2.INTER_CUBIC)
    backResized = frontResized / 255.0
    
    backInput[0] = backResized
    frontInput[0] = frontResized
    
    prediction = model.predict([frontInput, backInput])
    
    
    corners = calc_mean_score(prediction[0][0], pd.Series([0.5, 2, 3.5, 4.0, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10]))
    surface = calc_mean_score(prediction[1][0], pd.Series([0.5, 1 , 1.5, 2, 2.5, 3, 3.5, 4.0, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 9.6, 10]))
    edges = calc_mean_score(prediction[2][0],  pd.Series([2, 2.5, 3, 3.5, 4.0, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10]))
    centering = calc_mean_score(prediction[3][0], pd.Series([7, 7.5, 8, 8.5, 9, 9.5, 9.6, 10]))
    auto = calc_mean_score(prediction[4][0], pd.Series([6, 6.5, 7, 8, 9, 10]))
    
    return {'corners': corners, 'surface': surface, 'edges': edges, 'centering': centering, 'auto': auto}

def earth_movers_distance(y_true, y_pred):
    cdf_true = K.cumsum(y_true, axis=-1)
    cdf_pred = K.cumsum(y_pred, axis=-1)
    emd = K.sqrt(K.mean(K.square(cdf_true - cdf_pred), axis=-1))
    return K.mean(emd)
