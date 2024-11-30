import requests
from flask import Flask, jsonify, request
from pymongo import MongoClient
from bson import ObjectId

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017"
client = MongoClient(app.config["MONGO_URI"])
db = client.images

def convert_objectid_to_str(document):
    if document and '_id' in document:
        document['_id'] = str(document['_id'])
    return document

@app.route('/photo', methods=['POST'])
def get_photo():
    data = request.get_json()
    Location = data.get('Location')
    Lat = data.get('Lat')
    Long = data.get('Long')
    
    if not Location:
        return jsonify({"error": "searchImage field is required in the request body"}), 400

    photo_url = 'https://freight-service.azurewebsites.net/api/getimage'
    
    photo = db.image.find_one({'Location': Location})
    
    if photo:
        return jsonify(convert_objectid_to_str(photo))
    else:
        response = requests.post(photo_url, json={'searchImage': Location})
        
        if response.status_code == 200:
            try:
                images = response.json()
                if images:
                    first_image = images[0]
                    photo_data = {
                        'Location': Location,
                        'image': first_image['imageLinks'],
                        'Lat': Lat,
                        'Long': Long  
                    }
                    
                    inserted_id = db.image.insert_one(photo_data).inserted_id
                    
                    saved_photo = db.image.find_one({'_id': inserted_id})
                    return jsonify(convert_objectid_to_str(saved_photo))
                else:
                    return jsonify({"error": "No images found in API response"}), 500
            except requests.exceptions.JSONDecodeError:
                return jsonify({"error": "API response was not in JSON format"}), 500
        else:
            return jsonify({"error": "Unable to fetch photos from API", "details": response.content.decode('utf-8')}), 500
        
        
@app.route('/getthumbnail', methods=['POST'])
def get_thumbnail():
    data = request.get_json()
    Location = data.get('Location')
    Lat = data.get('Lat')
    Long = data.get('Long')
    
    if not Location:
        return jsonify({"error": "searchImage field is required in the request body"}), 400

    photo_url = 'https://chatcells.ai/api/travel/getImage'
    
    photo = db.image.find_one({'Location': Location})
    
    if photo:
        return jsonify(convert_objectid_to_str(photo))
    else:
        response = requests.post(photo_url, json={'searchImage': Location})
        
        if response.status_code == 200:
            try:
                images = response.json()
                if images:
                    first_image = images[0]
                    photo_data = {
                        'Location': Location,
                        'image': first_image['imageLinks'],
                        'Lat': Lat,
                        'Long': Long  
                    }
                    
                    inserted_id = db.image.insert_one(photo_data).inserted_id
                    
                    saved_photo = db.image.find_one({'_id': inserted_id})
                    return jsonify(convert_objectid_to_str(saved_photo))
                else:
                    return jsonify({"error": "No images found in API response"}), 500
            except requests.exceptions.JSONDecodeError:
                return jsonify({"error": "API response was not in JSON format"}), 500
        else:
            return jsonify({"error": "Unable to fetch photos from API", "details": response.content.decode('utf-8')}), 500
        

if __name__ == '__main__':
    app.run(debug=True)
