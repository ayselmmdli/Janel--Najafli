var modal_body = document.querySelector("#modal_body iframe");
var videos = [
"video/Y2Mate.is - Schindler's List-U6hoBzeYcY8-480p-1655581753742.mp4",
"video/Y2Mate.is - Bayatı-Şiraz Çexiyada - Janel Najafli-fHMRjCnPXa8-480p-1655501150724.mp4",
"video/Y2Mate.is - H.Wieniawski - Polonaise №1 in D major - Janel Najaflı-bG2YuUUg4XU-720p-1656360436479.mp4",
"video/Y2Mate.is - Schindler's List-U6hoBzeYcY8-480p-1655581753742.mp4",
"video/Sarı gəlin - Janel Najafli.mp4",
"video/Y2Mate.is - T.Albinoni Adagio in G minor - Janel Najafli (Violin) & Alia Makhmud-Zade (Organ)-f9fkbRsD3jA-480p-1659180316642.mp4",
"video/Y2Mate.is - Schindler's List-U6hoBzeYcY8-480p-1655581753742.mp4"
];
var videoIndex = 0;
document.getElementById("right").addEventListener("click", function () {
  if (videoIndex == videos.length - 1) {
    videoIndex = 0;
  }
  else{
    videoIndex++;
  }
  modal_body.src=videos[videoIndex]; 
});
document.getElementById("left").addEventListener("click", function () {
  if (videoIndex == 0) {
    videoIndex = videos.length - 1;
  }else{
    videoIndex--; 
  }
  modal_body.src=videos[videoIndex];
});

let z;
video_src = document.querySelectorAll(".video-list-item video");
videos.forEach((item, index) => {
  video_src[index].src= item;

});
let video_item =document.querySelectorAll(".video-list-item") 

video_item.forEach((x,index) => {
x.addEventListener("click", function () {
  myModal.style.display="block";
  modal_body.src = this.children[0].src;
document.querySelector("body").style.overflow="hidden"
  console.log(this);
  videoIndex=index;
});
});

document.getElementById("arrow-left").onclick = function () {
  const widthItem =
    document.querySelector(".video-list-item").offsetWidth;
  document.getElementById("scroll").scrollLeft -= widthItem;
  console.log(
    (document.getElementById("scroll").scrollLeft -= widthItem)
  );
};
document.getElementById("arrow-right").onclick = function () {
  const widthItem =
    document.querySelector(".video-list-item").offsetWidth;
  document.getElementById("scroll").scrollLeft += widthItem;
  console.log(document.getElementById("scroll").scrollLeft);
};

let video = document.querySelector("#myModal iframe");
document.querySelectorAll(".video-list-item").forEach((item,index)=>{
    item.addEventListener("click",function(){
        myModal.style.display="block";
        document.querySelector("body").style.overflow="hidden"
        video.src = this.children[0].src;    
    })
})
Close.addEventListener("click",function(){
    myModal.style.display="none";
    document.querySelector("body").style.overflow="visible"
    video.src=""
})


var modal_gallery_body = document.querySelector("#myModal_gallery .modal_body");
        var images = [
            "https://janelnajafli.com/wp-content/uploads/2021/11/image-06-10-21-08-10-3.jpeg",
            "https://janelnajafli.com/wp-content/uploads/2021/11/Janel-ph1oto.jpg",
            "https://janelnajafli.com/wp-content/uploads/2021/11/image-06-10-21-08-10-1.jpeg",
            "https://janelnajafli.com/wp-content/uploads/2021/11/image-06-10-21-08-10-2.jpeg",
            "https://janelnajafli.com/wp-content/uploads/2021/11/IMG_7973.jpg",
            "https://janelnajafli.com/wp-content/uploads/2022/01/IMG_8987-2048x1536.jpg",
            "https://janelnajafli.com/wp-content/uploads/2021/11/IMG_7971.jpg",
            "https://janelnajafli.com/wp-content/uploads/2021/11/IMG_7337.jpg",
            "https://janelnajafli.com/wp-content/uploads/2022/03/photo1648536700-1.jpeg"

        ];
        var imageIndex = 0;
        document.getElementById("right_gallery").addEventListener("click", function () {
            if (imageIndex == images.length - 1) {
                imageIndex = 0;
            }
            else {
                imageIndex++;
            }
            modal_gallery_body.children[0].src = images[imageIndex];

        });
        document.getElementById("left_gallery").addEventListener("click", function () {
            if (imageIndex == 0) {
                imageIndex = images.length - 1;
            } else {
                imageIndex--;
            }
            modal_gallery_body.children[0].src = images[imageIndex];

        });

        image = document.querySelectorAll(".image img");
        images.forEach((item, index) => {
            image[index].src = item;
        });
        document.querySelectorAll(".image").forEach((x, index) => {
            x.addEventListener("click", function () {
                myModal_gallery.style.display = "block";
                modal_gallery_body.children[0].src = this.children[0].src;
                document.querySelector("body").style.overflow = "hidden"
                imageIndex = index;
            });
        });

        image.forEach((item, index) => {
            item.addEventListener("click", function () {
                myModal_gallery.style.display = "block";
                document.querySelector("#myModal_gallery .modal_body").children[0].src = this.src;
            })
        })
        Close_gallery.addEventListener("click", function () {
            myModal_gallery.style.display = "none";
            document.querySelector("body").style.overflow = "visible"
        })
