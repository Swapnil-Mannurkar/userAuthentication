import RNFS from 'react-native-fs';

const JsonExporter = {
    exportJson: (jsonData, fileName) => {
      const jsonString = JSON.stringify(jsonData, null, 2);
      const path = `${RNFS.DocumentDirectoryPath}/${fileName}`;
  
      RNFS.writeFile(path, jsonString, 'utf8')
        .then(success => {
          console.log(`File ${fileName} created at ${path}`);
        })
        .catch(error => {
          console.log('Error writing file:', error);
        });
    },
  };
  
  export default JsonExporter;  