export default function createMarkup(res){
  return {__html: res};
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
