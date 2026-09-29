const menu_nav = document.querySelectorAll('.menu a');
menu_nav.forEach(function(el){
    el.addEventListener('click', 
      function(e){
       e.preventDefault();
       menu_nav.forEach(function(item){
        item.classList.remove('active');
       });

       this.classList.add('active');

      }
    );
});

const menu_tab = document.querySelectorAll('.menu-tabs a');
menu_tab.forEach(function(men){
  men.addEventListener('click', 
    function(e){
      e.preventDefault();
      menu_tab.forEach(function(item){
        item.classList.remove('active');
      });

      this.classList.add('active');
    }
  );
});