import { PDFDocument, Page, Image as PDFImage } from 'react-native-pdf-lib';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { FlatList, Text, View } from 'react-native';

// Function to format the recipe text
export const formatRecipe = (text) => {
    const sections = text.split('\n\n');
    const formatted = sections.map((section, idx) => {
        if (section.startsWith('Ingredients:')) {
            const ingredients = section
                .replace('Ingredients:', '')
                .split('\n- ')
                .filter(item => item.trim())
                .map(item => item.trim());

            return (
                <View key={idx}>
                    <Text style={{ fontWeight: 'bold' }}>Ingredients:</Text>
                    <FlatList
                        data={ingredients}
                        keyExtractor={(item, index) => `${item}-${index}`}
                        renderItem={({ item }) => <Text>- {item}</Text>}
                    />
                </View>
            );
        } else if (section.startsWith('Instructions:')) {
            const instructions = section
                .replace('Instructions:', '')
                .split('\nStep ')
                .filter(item => item.trim())
                .map((item, i) => ({
                    key: `${i}`,
                    text: item.replace(/\d+:/, '').trim(),
                }));

            return (
                <View key={idx}>
                    <Text style={{ fontWeight: 'bold' }}>Instructions:</Text>
                    <FlatList
                        data={instructions}
                        keyExtractor={item => item.key}
                        renderItem={({ item }) => (
                            <Text>
                                {parseInt(item.key) + 1}. {item.text}
                            </Text>
                        )}
                    />
                </View>
            );
        } else {
            return <Text key={idx}>{section}</Text>;
        }
    });
    return formatted;
};

// Function to download the recipe as a PDF
export const downloadPDF = async (data) => {
  try {
    const pdfWidth = 595;  // A4 width in points
    const pdfHeight = 842; // A4 height in points
    let currentY = 20; // Y position for the content

    // Fetch the image from URL
    const imageLocalPath = `${FileSystem.cacheDirectory}temp_image.png`;
    const response = await FileSystem.downloadAsync(data.image_url, imageLocalPath);
    
    if (response.status !== 200) {
      throw new Error('Failed to download image');
    }

    const doc = PDFDocument.create('recipe.pdf')
      .addPages(
        Page.create()
          .setMediaBox(0, 0, pdfWidth, pdfHeight)
          .drawText('Recipe:', {
            x: 20,
            y: pdfHeight - currentY,
            fontSize: 18,
          })
          .drawImage(PDFImage.fromPath(response.uri), {
            x: 20,
            y: pdfHeight - (currentY + 200), // Adjust as needed
            width: pdfWidth - 40,
            height: 200,
          })
          .drawText(data.recipe, {
            x: 20,
            y: pdfHeight - (currentY + 250),
            fontSize: 12,
          })
      );

    // Save the PDF
    const pdfPath = `${FileSystem.documentDirectory}recipe.pdf`;
    await doc.write(pdfPath);
    console.log('PDF saved at:', pdfPath);

    // Share the PDF
    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(pdfPath);
    } else {
      console.log('Sharing is not available on this device');
    }
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
};
