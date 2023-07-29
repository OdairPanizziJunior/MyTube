//declara variável LISTVIDEO e com o querySelectorAll passa os parâmetros das duas classes criadas no HTML
let listVideo = document.querySelectorAll('.video-list .vid');

//declara variável MAINVIDEO e com o querySelector passa os parâmetros da classe .main-video e a tag Video criadas no HTML
let mainVideo = document.querySelector('.main-video video');

//declara variável TITLE e com o querySelector passa os parâmetros da classe .main-video e Titulo do vídeo criadas no HTML
let title = document.querySelector('.main-video .title');


listVideo.forEach(video =>{
    video.onclick = () =>{
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if(video.classList.contains('active')){
            let src = video.children[0].getAttribute('src');
            mainVideo.src = src;
            let text = video.children[1].innerHTML;
            title.innerHTML = text;
        };
    };
});