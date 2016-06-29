export const config = {
  NAME: 'GGSECO.COM',
  LINK: 'http://www.ggseco.com',
  PROFILE: {
    NAME: 'Gabriel',
    EMAIL: 'ggarciaseco@gmail.com',
    RIGHTS: 'ADMIN'
  }
};

export const menu = [
  {
    ID:'usuarios',
    NAME: 'Usuarios',
    ICON: 'md-account-box',
    CHILDREN:[
      {
        NAME: 'Listado de usuarios',
        LINK: '/listar_usuarios',
        ID:'listar-usuarios',
        NOTIFICATION:''
      },
      {
        NAME: 'Añade usuario',
        LINK: '/anade_usuario',
        ID:'anade-usuario',
        NOTIFICATIONS:''
      }
    ]
  },
  {
    ID:'slide',
    NAME: 'Slide',
    ICON: 'md-insert-photo',
    CHILDREN:[
      {
        NAME: 'Listado de banners',
        LINK: '/listar_slide',
        ID:'listar-slide',
        NOTIFICATION:''
      },
      {
        NAME: 'Añade banner',
        LINK: '#/anade_slide',
        ID:'anade-slide',
        NOTIFICATIONS:''
      }
    ]
  },
  {
    ID:'noticias',
    NAME: 'Noticias',
    ICON: 'md-event',
    CHILDREN:[
      {
        NAME: 'Listado de noticias',
        LINK: '/#listar_noticias',
        ID:'listar-noticias',
        NOTIFICATION:''
      },
      {
        NAME: 'Añade noticia',
        LINK: '#/anade_noticia',
        ID:'anade-noticia',
        NOTIFICATIONS:''
      },
      {
        NAME: 'Listado de categorías',
        LINK: '/#listar_noticias_categorias',
        ID:'listar-noticias-categorias',
        NOTIFICATION:''
      },
      {
        NAME: 'Añade categoria',
        LINK: '/#anade_categoria_noticias',
        ID:'anade-categoria-noticias',
        NOTIFICATION:''
      },
      {
        NAME: 'Listado de tags',
        LINK: '/#listar_noticias_tags',
        ID:'listar_noticias_tags',
        NOTIFICATION:''
      },
      {
        NAME: 'Añade tag',
        LINK: '/#anade_tag_noticias',
        ID:'anade-tag-noticias',
        NOTIFICATION:''
      }
    ]
  },
  {
    ID:'portfolio',
    NAME: 'Portfolio',
    ICON: 'md-book',
    CHILDREN:[
      {
        NAME: 'Listado de portfolio',
        LINK: '/#listar_portfolio',
        ID:'listar-portfolio',
        NOTIFICATION:''
      },
      {
        NAME: 'Añade portfolio',
        LINK: '#/anade_portfolio',
        ID:'anade-portfolio',
        NOTIFICATIONS:''
      }
    ]
  },
  {
    ID:'contacto',
    NAME: 'Contacto',
    ICON: 'md-message',
    LINK: '/#listar_contactos',
    CHILDREN:[]
  },
  {
    ID:'configuracion',
    NAME: 'Configuración',
    ICON: 'md-mode-edit',
    LINK: '/#configuracion',
    CHILDREN:[]
  }

];
