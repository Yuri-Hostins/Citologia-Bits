window.addEventListener('scroll',function(){
  const header = document.querySelector('header');
  header.classList.toggle("navegacao-fixa", window.scrollY > 0);
});

function togglemenu(){
  const menutoggle = document.querySelector('.menutoggle');
  const navigation = document.querySelector('.navegacao');
  menutoggle.classList.toggle('active');
  navigation.classList.toggle('active');
};