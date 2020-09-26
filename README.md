# REC-PL (Ruidos en Castelldefels Platja)
Control de punts calents, partint d'un full de càlcul de googhe sheet i de les dades entrades en ell es filtren per carregar la combo multi-selecció de les categories i en funció de les seleccionades es mostren al mapa.

- Afegida funcionalitat de filtrar per dates i esborrar filtres
- Afegida funcionalitat de picar sobre les icones de punts calents i obtenir informació
- Some refactor ;) ... poc a poc i bona lletra

# What I used
- Js 
- React and create-react-app 
- MaterialUI 
- mapbox-gl

# How to start
## Clone the respository
```
git clone https://github.com/xmorato/soroll.git
```

## Set a .env.local in you source directory and add:
```
REACT_APP_GOOGLE_SHEETS_DOC_ID=[you_key]
REACT_APP_MAPBOX_TOKEN=[your_key]
```

## Install dependencies & Launch stuff
```
npm init
npm start
```
