# Crop Yield Prediction System

A machine learning-powered web application that predicts crop yields based on various agricultural parameters, helping farmers and agricultural planners make data-driven decisions.

---

## Project Metrics

- **Training Dataset**: 19,689 records × 10 features
- **Model Parameters**: 9 input features (after encoding)
- **Geographic Coverage**: 30+ Indian states and union territories
- **Crop Varieties Supported**: 50+ different crop types
- **Historical Data Period**: 1997-2007 (10 years)
- **Prediction Response Time**: < 2 seconds
- **Technology Stack**: Flask, Pandas, Scikit-learn, Gunicorn

---

## Project Overview

This system leverages historical agricultural data to forecast crop yields using machine learning algorithms. The model analyzes multiple factors including rainfall, fertilizer usage, pesticide application, and geographical location to provide reliable yield predictions.

### Key Features

- Multi-crop support for 50+ crop varieties
- Seasonal analysis (Kharif, Rabi, Summer, Autumn, Winter, Whole Year)
- State-wise predictions across India
- User-friendly web interface
- Real-time predictions
- Production-ready deployment with Gunicorn

---

## Understanding Key Terms

### Agricultural Terms

**Crop Yield**: The amount of crop produced per unit area (Production ÷ Area), measured in metric tons per hectare. It is a key indicator of agricultural productivity.

**Cropping Seasons in India**:

- **Kharif**: Monsoon crops (June-October) - Rice, Cotton, Maize
- **Rabi**: Winter crops (October-March) - Wheat, Gram, Mustard
- **Summer**: Summer crops (March-June) - Vegetables, Fruits
- **Whole Year**: Perennial crops - Coconut, Sugarcane, Banana

**Area**: Total land under cultivation in hectares, representing the scale of farming operation.

**Production**: Total quantity of crop harvested in metric tons, a direct measure of agricultural output.

**Annual Rainfall**: Total precipitation received in millimeters (mm), a critical factor affecting crop growth and yield.

**Fertilizer**: Chemical nutrients applied to soil in kilograms to enhance soil fertility and crop productivity.

**Pesticide**: Chemicals used to control pests in kilograms, protecting crops from diseases and insects.

### Technical Terms

**Machine Learning Model**: An algorithm trained on historical data to make predictions by identifying patterns in data to forecast future outcomes.

**One-Hot Encoding**: A technique to convert categorical data (crop names, states) into numerical format, enabling machine learning algorithms to process text data.

**Feature Engineering**: The process of selecting and transforming input variables to improve model accuracy and prediction quality.

**WSGI (Web Server Gateway Interface)**: A standard interface between web servers and Python applications. Gunicorn implements this for production deployment.

**Flask Framework**: A lightweight Python web framework that handles HTTP requests and renders web pages.

**Pickle File (.pkl)**: A serialized machine learning model that allows saving and loading trained models efficiently.

---

## Technology Stack

### Backend

- **Flask**: Web application framework
- **Pandas**: Data manipulation and analysis
- **Scikit-learn**: Machine learning library
- **Gunicorn**: Production WSGI HTTP server

### Frontend

- **HTML5**: Structure and content
- **CSS3**: Styling and responsive design
- **JavaScript**: Form validation and interactivity

### Data

- **Format**: CSV
- **Features**: 10 columns (Crop, Year, Season, State, Area, Production, Rainfall, Fertilizer, Pesticide, Yield)

---

## Project Structure

```
Crop-Yield-Prediction/
│
├── model/
│   └── model.pkl              # Trained ML model (serialized)
│
├── static/
│   ├── style.css              # Application styling
│   └── script.js              # Client-side JavaScript
│
├── templates/
│   ├── index.html             # Input form page
│   └── result.html            # Prediction result page
│
├── app.py                     # Flask application (main server)
├── crop_yield.csv             # Training dataset (19,689 records)
├── requirements.txt           # Python dependencies
├── Procfile                   # Deployment configuration
└── README.md                  # Project documentation
```

---

## Installation & Setup

### Prerequisites

- Python 3.7 or higher
- pip (Python package manager)

### Installation Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Abhishek-Negi01/Crop-Yield-Prediction.git
   cd Crop-Yield-Prediction
   ```

2. **Create Virtual Environment** (Recommended)

   ```bash
   python -m venv venv

   # Windows
   venv\Scripts\activate

   # Linux/Mac
   source venv/bin/activate
   ```

3. **Install Dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Application**

   ```bash
   # Development mode
   python app.py

   # Production mode with Gunicorn
   gunicorn app:app
   ```

5. **Access the Application**
   - Open browser: `http://localhost:10000`
   - Network access: `http://0.0.0.0:10000`

---

## Usage

### Making a Prediction

1. Select crop from 50+ available varieties
2. Enter crop year (1997 onwards)
3. Select cropping season
4. Select geographical location (state)
5. Enter cultivation area (hectares)
6. Enter production quantity (metric tons)
7. Enter annual rainfall (mm)
8. Enter fertilizer amount (kg)
9. Enter pesticide amount (kg)
10. Click Predict for instant results

### Example Input

- **Crop**: Rice
- **Year**: 2023
- **Season**: Kharif
- **State**: West Bengal
- **Area**: 1000 hectares
- **Production**: 2500 metric tons
- **Rainfall**: 1500 mm
- **Fertilizer**: 50000 kg
- **Pesticide**: 1000 kg

**Output**: Predicted Yield = 2.5 metric tons/hectare

---

## Dataset Information

### Data Source

- **Origin**: Indian Agricultural Statistics
- **Time Period**: 1997-2007
- **Total Records**: 19,689 entries
- **Total Features**: 10 columns

### Data Features

| Feature         | Description                 | Data Type   | Example             |
| --------------- | --------------------------- | ----------- | ------------------- |
| Crop            | Crop name                   | Categorical | Rice, Wheat, Cotton |
| Crop_Year       | Year of cultivation         | Numerical   | 1997-2007           |
| Season          | Cropping season             | Categorical | Kharif, Rabi        |
| State           | Indian state                | Categorical | West Bengal, Punjab |
| Area            | Cultivation area (hectares) | Numerical   | 1000.5              |
| Production      | Crop output (metric tons)   | Numerical   | 2500.75             |
| Annual_Rainfall | Rainfall (mm)               | Numerical   | 1500.2              |
| Fertilizer      | Fertilizer used (kg)        | Numerical   | 50000               |
| Pesticide       | Pesticide used (kg)         | Numerical   | 1000                |
| Yield           | Production per unit area    | Numerical   | 2.5                 |

### Supported Crops (50+)

Rice, Wheat, Maize, Cotton, Sugarcane, Groundnut, Potato, Onion, Banana, Coconut, Arecanut, Jute, Tobacco, Cardamom, Black Pepper, Turmeric, Ginger, Bajra, Jowar, Ragi, Cashewnut, Soyabean, Barley, Masoor, Moong (Green Gram), Safflower, Sunflower, Urad, and 22+ more varieties.

### Geographic Coverage (30+ States)

Andhra Pradesh, Assam, Bihar, Chhattisgarh, Delhi, Goa, Gujarat, Haryana, Himachal Pradesh, Jammu & Kashmir, Jharkhand, Karnataka, Kerala, Madhya Pradesh, Maharashtra, Manipur, Meghalaya, Mizoram, Nagaland, Odisha, Puducherry, Punjab, Sikkim, Tamil Nadu, Telangana, Tripura, Uttar Pradesh, Uttarakhand, West Bengal, Arunachal Pradesh.

---

## Machine Learning Model

### Model Architecture

- **Algorithm**: Regression-based ML model
- **Input Features**: 9 features (after one-hot encoding categorical variables)
- **Output**: Continuous yield value (metric tons/hectare)
- **Training Data**: 19,689 historical records
- **Encoding Method**: One-hot encoding for categorical features (Crop, Season, State)

### Model Pipeline

1. **Data Preprocessing**: Handle missing values, normalize numerical features
2. **Feature Engineering**: One-hot encode categorical variables (Crop, Season, State)
3. **Model Training**: Train on historical agricultural data (1997-2007)
4. **Model Serialization**: Save trained model as pickle file for deployment
5. **Prediction**: Load model and predict yield on new input data

### Model Training Parameters

- **Total Records**: 19,689
- **Input Features**: 9 (Crop_Year, Area, Production, Annual_Rainfall, Fertilizer, Pesticide, Crop_encoded, Season_encoded, State_encoded)
- **Target Variable**: Yield (metric tons/hectare)

### Performance Considerations

- Model trained on diverse agricultural conditions across India
- Handles multiple crop types and geographic variations
- Considers seasonal patterns and climate factors
- Accounts for agricultural inputs (fertilizer, pesticide)

---

## Deployment

### Local Deployment

```bash
python app.py
```

Application runs on `http://0.0.0.0:10000`

### Production Deployment

The application includes a `Procfile` for deployment on cloud platforms:

- Heroku: `web: gunicorn app:app`
- AWS Elastic Beanstalk
- Google Cloud Platform
- Azure App Service

### Deployment Example (Heroku)

```bash
heroku login
heroku create crop-yield-predictor
git push heroku main
heroku open
```

---

## Project Impact

### Benefits

- **Farmers**: Data-driven crop planning and yield estimation
- **Researchers**: Agricultural trend analysis and insights
- **Policy Makers**: Evidence-based agricultural policy decisions
- **Students**: Learning resource for ML in agriculture

### Use Cases

1. Crop planning based on predicted yields
2. Resource optimization (fertilizer and pesticide usage)
3. Risk assessment before cultivation
4. Financial planning and income estimation
5. Crop insurance premium calculations
6. Agricultural supply chain planning

---

## License

This project is open-source and available for educational and research purposes.

---

_Version: 1.0.0_
