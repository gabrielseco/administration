import {browserHistory} from 'react-router';

export const generateForm = (titulo) =>  {
  return {
    TITULO:titulo,
      ELEMENTS:[
      {
        ID:'activo',
        NAME:'Activo',
        TYPE:'switch',
        CLASS:'',
        VALUE:0
      },
      {
        ID:'titulo',
        NAME:'Título',
        TYPE:'text',
        CLASS:'form-control',
        VALUE: '',
        REQUIRED: true,
        VALIDATION:'El campo es requerido'
      },
      {
        ID:'enlace',
        NAME:'Enlace',
        TYPE:'text',
        CLASS:'form-control',
        VALUE: ''
      },
      {
        ID:'texto',
        NAME:'Texto',
        TYPE:'note',
        CLASS:'wysiwyg',
        VALUE: ''
      },
      {
        ID: 'imagen',
        NAME: 'Subir imagen',
        TYPE: 'file',
        CLASS: 'btn btn-info fileinput-button'
      }
    ],
    BUTTONS: [
      {
        NAME:'Guardar',
        CLASS:'btn btn-primary',
        TYPE:'submit'
      },
      {
        NAME:'Cancelar',
        CLASS:'btn btn-default',
        TYPE:'button'
      }
    ]
  };
};
