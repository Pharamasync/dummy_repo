











model_list = ['Logistic Regression', 'Decision Tree', 'Random Forest', 'Gradient Boosted', 'Neural Network', 'SVM' ]

model_code_dict = {'LR' : 'Logistic Regression', 'DT' :'Decision Tree', 'RF' :'Random Forest', 'GB': 'Gradient Boosted', 'NN':'Neural Network', 'SV':'SVM'  }
#Import Libraries
from flask import Flask, render_template, request, jsonify, redirect, url_for ,session ,make_response
import pandas as pd
import numpy as np
import json
import os
from uuid import uuid4
import DataProcessing
from os import listdir
from os.path import isfile, join
from werkzeug.utils import secure_filename
import datetime
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
import seaborn as sns
import joblib 
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import confusion_matrix
from sklearn.metrics import classification_report
from sklearn.metrics import accuracy_score
from sklearn.ensemble import RandomForestClassifier
from sklearn import svm
from sklearn.linear_model import LogisticRegression
from sklearn.neural_network import MLPClassifier
from sklearn.preprocessing  import StandardScaler
from sklearn.ensemble import GradientBoostingClassifier
from sklearn import metrics
from sklearn.metrics import fbeta_score
import time
import re, math
from sklearn.preprocessing import MinMaxScaler
import webbrowser



#Configuration Variables

#Folder where data will be stored
DATA_FOLDER = "./Data/"
DATA_TRAIN_FOLDER = "./Data/Train/"
DATA_TEST_FOLDER = "./Data/Test/"
DATA_FOLDER = "./Data/"
UPLOAD_FOLDER = './Data'
CONFIG_FOLDER = "./Config/"
IV_FOLDER="./InfoValue/"
#Folder where config will be stored
config_folder = "./Config/"
SAVED_MODEL_FOLDER="./SavedModels/"
decision_list =['Non Suspicious Txn' , 'Suspicious Txn']
IMAGE_FOLDER="./static/"
MODE ='TRAIN_DETECTION_RATE'
LOADED_FILE_DICT ={}
DETECTION_RATE_1 = 0.9
DETECTION_RATE_2 = 0.8

detection_list = ['90%' ,'80%']

#List of Models









secret_model_list = ['Model_1(LR)','Model_2(DT)','Model_3(RF)','Model_4(GB)','Model_5(NN)','Model_6(SV)'  ]
secret_model_dict = {'Model_1(LR)' : 'LR', 'Model_2(DT)' :'DT', 'Model_3(RF)' :'RF', 'Model_4(GB)': 'GB', 'Model_5(NN)':'NN', 'Model_6(SV)':'SV' }
model_run_type = ['All Runs','Latest Run']
#Parameters for Logistic Regression
lr_solver = ['newton-cg','lbfgs','liblinear','sag','saga']

#Parameters for Decision Tree Models
dt_depth = ['5','10' ,'20', '30','40','50','100']
dt_leaf = ['1','2','3','4','5','6','7','8','9','10']

#Parameters for Random Forest Model
rf_no_of_trees = ['10','50','100','200','500','1000','2000']
rf_minimum_splits = ['1','2','3']
rf_minimum_leaf = ['1','2','3']
rf_bootstrap = ['true','false']

dataset_setup_file= './Data/dataset_setup.json'
model_comparison_data_file= 'model_comparison.json'

exclude_variable_data_file='exclude_variable.json'

exc_col = 'EXCLTYPE'
old_npi = 'Referring NPI'
new_npi = 'NPI'
gender_col = 'Referring Provider Gender'
bene_col = 'Number of Supplier Beneficiaries'
dmepos_cols = ['Referring NPI','Referring Provider Gender','Referring Provider Type','Number of Suppliers','Number of Supplier Beneficiaries','Number of Supplier Claims','Number of Supplier Services','Average Supplier Submitted Charge','Average Supplier Medicare Payment Amount\t']
dmepos_group_keys = ['NPI','Referring Provider Gender','Referring Provider Type']
dmepos_group_agg_keys =['Number of Suppliers','Number of Supplier Beneficiaries','Number of Supplier Claims','Number of Supplier Services','Average Supplier Submitted Charge','Average Supplier Medicare Payment Amount']

file_type = ['Train','Test']

percent_dict = {'2' : '200_bases' ,'0.5' : '50_bases' ,'1' :'100_bases' ,'3' :'300_bases' ,'5' :'500_bases'}

ALLOWED_EXTENSIONS = set(['csv'])

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.secret_key = 'risk_analytics_accelerator_key'



@app.route("/", methods = ['GET', 'POST'])
def TxnMonitoringMain():    
    return render_template('model.html')



@app.route("/modelSelection", methods = ['GET', 'POST'])
def modelSelection():     
    
    try :
        train_file_names = [f for f in listdir(DATA_TRAIN_FOLDER) if isfile(join(DATA_TRAIN_FOLDER, f))]
    except :
        print("exception caught")
        
    try :
        test_file_names = [f for f in listdir(DATA_TEST_FOLDER) if isfile(join(DATA_TEST_FOLDER, f))]
    except :
        print("exception caught")
        
        
    return render_template('model.html' , model_list = secret_model_list , train_file_names = train_file_names , test_file_names = test_file_names ,  lr_solver = lr_solver ,dt_depth = dt_depth ,dt_leaf = dt_leaf , rf_no_of_trees = rf_no_of_trees , rf_minimum_splits = rf_minimum_splits , rf_minimum_leaf = rf_minimum_leaf , rf_bootstrap = rf_bootstrap, detection_list = detection_list)  
    
    
    
if __name__ == '__main__':
    app.run()