var colors = document.getElementsByName("color"),
  values = []; 	//ѡ�е�ֵ
colors = [].slice.call(colors); //�����������ת��Ϊ����
colors.forEach(function(element, key) {
  if(element.checked) 
    values.push(element.value);
});
console.log(values);