const numOfGalleries=20;
        for(let i=1;i<=numOfGalleries;i++){
                let gallery=document.querySelector('#paginated_gallery'+i);
                event(gallery);
        }


  function event(gallery)  {
    const gallery_scroller = gallery.querySelector('.gallery_scroller');
        const gallery_item_size = gallery_scroller.querySelector('div').clientWidth;

        gallery.querySelector('.forward_show_list').addEventListener('click', scrollToNextPage);
        gallery.querySelector('.forward_show_list').addEventListener('click', scrollToNextPage);
        gallery.querySelector('.backward_show_list').addEventListener('click', scrollToPrevPage);

        // For paginated scrolling, simply scroll the gallery one item in the given
        // direction and let css scroll snaping handle the specific alignment.
        function scrollToNextPage() {
            gallery_scroller.scrollBy(gallery_item_size, 0);
        }
        function scrollToPrevPage() {
            gallery_scroller.scrollBy(-gallery_item_size, 0);
        }
  }
