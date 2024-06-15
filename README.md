# Recipe Generator Mobile App

Recipe Generator is a mobile app built with React Native and Expo. It helps users create recipes based on the ingredients they have available in their fridge. By inputting their ingredients, the app generates a recipe and provides an image of how the finished dish should look.

## Features

- **Ingredient Input:** Users can input what they have in their fridge.
- **Calories Input:** Users can input how many calories their meal should have.
- **Language Picker** Users can choose in which language their recipe should be written,
- **Recipe Generation:** The app generates a recipe based on the provided ingredients.
- **Visual Representation:** It provides an image of the expected dish.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- The backend service of this project (see [Backend Setup](https://github.com/MeldinRadoncic/RecipeGeneratorBackend))

### Setup

1. Clone the repository:

    ```bash
    git clone (https://github.com/MeldinRadoncic/ReactNativeRecipeGenerator.git)
    cd recipe-generator
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the Expo server:

    ```bash
    npx expo start
    ```

4. Open the Expo Go app on your device and scan the QR code to run the app.

### Backend Setup

To generate recipes, the app makes API calls to `localhost:5000/api/generate_recipe`. You need to set up the backend locally:

1. Follow the backend setup instructions in the [Backend Repository](https://github.com/MeldinRadoncic/RecipeGeneratorBackend).
2. Ensure the backend server is running on `localhost:5000`.

## Usage

1. Open the app on your device or emulator.
2. Input the ingredients available in your fridge.
3. Tap the "Let's Cook!" button.
4. View the generated recipe and the dish image.



