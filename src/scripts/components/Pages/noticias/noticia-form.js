import {browserHistory} from 'react-router';
import moment from 'moment';

export const generateForm = (titulo, func) =>  {
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
        ID:'fecha',
        NAME:'Fecha',
        TYPE:'datepicker',
        CLASS:'',
        VALUE:moment().format("YYYY-MM-DD")
      },
      {
        ID:'titulo',
        NAME:'Título',
        TYPE:'text',
        CLASS:'form-control',
        TAKECONTROL:'slug',
        VALUE: '',
        REQUIRED: true,
        VALIDATION:'El campo es requerido'
      },
      {
        ID:'slug',
        NAME:'URL',
        TYPE:'text',
        CLASS:'form-control',
        VALUE: '',
        REQUIRED: false,
        VALIDATION:''
      },
      {
        ID:'categorias_noticias',
        NAME:'Categorías',
        TYPE:'select-multiple',
        CLASS:'',
        VALUE: [],
        REQUIRED: false,
        VALIDATION:'El campo es requerido'
      },
      {
        ID:'tags_noticias',
        NAME:'Tags',
        TYPE:'select-multiple',
        CLASS:'',
        VALUE: [],
        REQUIRED: false,
        VALIDATION:'El campo es requerido'
      },
      {
        ID:'intro',
        NAME:'Intro',
        TYPE:'note',
        CLASS:'wysiwyg',
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
        ID:'imagenFD',
        NAME:'Imagen',
        TYPE:'img',
        CLASS:'img-thumbnail',
        FROM:'SERVER',
        VIEW:'ADD',
        VALUE: '',
        WIDTH:200
      },
      {
        ID: 'imagen',
        NAME: 'Subir imagen',
        TYPE: 'file',
        CLASS: 'btn btn-info fileinput-button',
        ONCHANGE:func
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
