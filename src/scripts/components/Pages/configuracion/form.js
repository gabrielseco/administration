import {browserHistory} from 'react-router';
import moment from 'moment';

export const generateForm = (titulo) =>  {
  return {
    TITULO:titulo,
    ELEMENTS:[
      {
        ID:'titulo',
        NAME:'Título',
        TYPE:'text',
        CLASS:'form-control',
        VALUE: '',
        REQUIRED: true,
        VALIDATION:'El campo es requerido',
        EXCLUDE:true
      }
    ],
    BUTTONS: [
      {
        NAME:'Añadir elemento',
        CLASS:'btn btn-primary pull-right',
        TYPE:'button',
        CLICK:() => {
          console.log('anade elemento',this.state);
          this.state.elements.push({
              ID:'label',
              NAME:'label',
              TYPE:'text',
              CLASS:'form-control',
              VALUE: '',
              REQUIRED: true,
              VALIDATION:'El campo es requerido',
              EXCLUDE:true
          });
        }
      },
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
