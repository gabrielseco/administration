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
        ID:'email',
        NAME:'Email',
        TYPE:'text',
        CLASS:'form-control',
        VALUE: '',
        REQUIRED: true,
        VALIDATION:'El campo es requerido'
      },
      {
        ID:'password',
        NAME:'Password',
        TYPE:'password',
        CLASS:'form-control',
        VALUE: '',
        REQUIRED: true,
       'VALIDATION':'El campo es requerido'
      },
      {
        ID:'nombre',
        NAME:'Nombre',
        TYPE:'text',
        CLASS:'form-control',
        VALUE: '',
        REQUIRED: false,
        VALIDATION:''
      },
      {
        ID:'twitter',
        NAME:'Twitter',
        TYPE:'text',
        CLASS:'form-control',
        VALUE: '',
        REQUIRED: false,
        VALIDATION:''
      },
      {
        ID:'github',
        NAME:'Github',
        TYPE:'text',
        CLASS:'form-control',
        VALUE: '',
        REQUIRED: false,
        VALIDATION:''
      },
      {
        ID:'soundcloud',
        NAME:'Soundcloud',
        TYPE:'text',
        CLASS:'form-control',
        VALUE: '',
        REQUIRED: false,
        VALIDATION:''
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
        TYPE:'button',
        CLICK:function(){
          browserHistory.goBack();
        }
      }
    ]
  };
};
