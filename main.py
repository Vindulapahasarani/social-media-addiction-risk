from fastapi import FastAPI
from pydantic import BaseModel
import joblib

# Initialize FastAPI app
app = FastAPI()

# Load the trained model
model = joblib.load("social_media_addiction_model.joblib")

# Define the input data schema
class PredictionInput(BaseModel):
    age: float
    gender: str
    usageTime: float
    postsPerDay: float
    happiness: float
    anxiety: float
    sadness: float

# Define the prediction endpoint
@app.post("/predict")
def predict(data: PredictionInput):
    # Convert input data to the format expected by the model
    input_data = [
        data.age,
        1 if data.gender.lower() == "male" else 0,  # Example: encoding gender
        data.usageTime,
        data.postsPerDay,
        data.happiness,
        data.anxiety,
        data.sadness,
    ]
    
    # Make prediction
    prediction = model.predict([input_data])
    risk_level = "High" if prediction[0] == 1 else "Low"

    return {"risk": risk_level}
