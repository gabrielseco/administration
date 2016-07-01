import {browserHistory} from 'react-router';
import moment from 'moment';

export const generateForm = (titulo) =>  {
  return {
    TITULO:titulo,
    ELEMENTS:[
      {
        ID:'activo',
        NAME:'Activo',
        TYPE:'switch',
        CLASS:'',
        VALUE:0,
        EXCLUDE:true

      },
      {
        ID:'fecha',
        NAME:'Fecha',
        TYPE:'datepicker',
        CLASS:'',
        VALUE:moment().format("YYYY-MM-DD"),
        EXCLUDE:true

      },
      {
        ID:'titulo',
        NAME:'Título',
        TYPE:'text',
        CLASS:'form-control',
        TAKECONTROL:'slug',
        VALUE: '',
        REQUIRED: true,
        VALIDATION:'El campo es requerido',
        EXCLUDE:true
      },
      {
        ID:'slug',
        NAME:'URL',
        TYPE:'text',
        CLASS:'form-control',
        VALUE: '',
        REQUIRED: false,
        VALIDATION:'',
        EXCLUDE:true
      },
      {
        ID:'categorias_noticias',
        NAME:'Categorías',
        TYPE:'select-multiple',
        CLASS:'',
        VALUE: [],
        REQUIRED: true,
        VALIDATION:'El campo es requerido'
      },
      {
        ID:'tags_noticias',
        NAME:'Tags',
        TYPE:'select-multiple',
        CLASS:'',
        VALUE: [],
        REQUIRED: true,
        VALIDATION:'El campo es requerido'
      },
      {
        ID:'intro',
        NAME:'Intro',
        TYPE:'note',
        CLASS:'wysiwyg',
        VALUE: '',
        EXCLUDE:true
      },
      {
        ID:'texto',
        NAME:'Texto',
        TYPE:'note',
        CLASS:'wysiwyg',
        VALUE: '',
        EXCLUDE:true
      },
      {
        ID: 'imagen',
        NAME: 'Subir imagen',
        TYPE: 'file',
        CLASS: 'btn btn-info fileinput-button',
        EXCLUDE:true
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
