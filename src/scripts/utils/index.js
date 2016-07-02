import moment from 'moment'

export default function createMarkup(res){
  return {__html: res};
}

//transform a date value to the input [type='date']
function transformDateForInput(value){
  return moment(value).format("YYYY-MM-DD");
}

export function mapValues(json, form){
    for(let  i = 0; i < form.ELEMENTS.length; i++) {
      const key = form.ELEMENTS[i].ID;

      if(form.ELEMENTS[i].EXCLUDE !== true) {

        if(form.ELEMENTS[i].TYPE === 'datepicker'){
          form.ELEMENTS[i].VALUE = transformDateForInput(json[key]);
        } else if (form.ELEMENTS[i].TYPE === 'select-multiple'){
          form.ELEMENTS[i].SELECTED = json[key];
        } else {
          form.ELEMENTS[i].VALUE = json[key];
        }
      }
    }
}

export function slugify(type, value) {
  if (type !== 'slug'){
    return value;
  }

  value = value.replace(/^\s+|\s+$/g, ''); // trim
  value = value.toLowerCase(); //minúsucular

  // remove accents, swap ñ for n, etc

  const from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
  const to   = "aaaaaeeeeeiiiiooooouuuunc------";

  for (let i = 0, l = from.length ; i < l ; i++) {
    value = value.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  value = value.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return value;

}
