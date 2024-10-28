const hour = document.querySelector('.h'),
      min = document.querySelector('.m'),
      sec = document.querySelector('.s'),
      hoursNum = document.querySelector('.hours'),
      minutesNum = document.querySelector('.minutes');
      
      
function clock() {
    
    // Date - получение точного времени с устройством 
    
    const nowTime = new Date();
    
    const m = nowTime.getMinutes();
    const h = nowTime.getHours();
    const s = nowTime.getSeconds();
    
    sec.style = `transform:rotate(${s * 6}deg);transition:1s linear;`,
    min.style = `transform:rotate(${m * 6}deg);transition:1s linear;`,
    hour.style = `transform:rotate(${h * 30}deg);transition:1s linear;`;
    
    hoursNum.innerHTML = h > 10 ? h : '0' + h;
    minutesNum.innerHTML = m > 10 ? m : '0' + m;
    

    setTimeout(() => {
        clock();
    }, 1000); 
    
}

clock();


const links = document.querySelectorAll('.tabsItem'),
      tabs = document.querySelectorAll('.tabsContentItem');
      
for (let i = 0; i < links.length; i++) {
        
    links[i].addEventListener('click', function (e) {
        e.preventDefault(); // Метод отключения функционала html
        
        for (let ix = 0; ix < tabs.length; ix++) {
            
            
            links[ix].classList.remove('active');
            tabs[ix].classList.remove('active');
            
        }
        
        tab(tabs[i], links[i]);
        
    })
        
}

function tab(tab,link) {
    tab.classList.add('active');
    link.classList.add('active');
}

const stopWatchBtn = document.querySelector('.stopwatch__btn'),
      secondWatch = document.querySelector('.stopwatch__seconds'),
      minutesWatch = document.querySelector('.stopwatch__minutes'),
      hoursWatch = document.querySelector('.stopwatch__hours'),
      info = document.querySelector('.tabsLink__span')
       

stopWatchBtn.addEventListener('click', function () {
    if (stopWatchBtn.innerHTML == 'Start'){
        stopWatchBtn.innerHTML = 'Stop';
        stopWatchBtn.style = 'background:red';
        info.classList.add('active');
        let i = 0;
        
        setTimeout(() => {
            stopWatch(stopWatchBtn, i)
        }, 1000);
        
    } else if(stopWatchBtn.innerHTML == 'Stop'){
        stopWatchBtn.innerHTML = 'Clear';
        stopWatchBtn.style = 'background:yellow';
        info.classList.remove('active');
        info.classList.add('active_clear')
        
    } else {
        stopWatchBtn.innerHTML = 'Start';
        stopWatchBtn.style = 'background:white';
        info.classList.remove('active');
        info.classList.remove('active_clear');
        secondWatch.innerHTML = 0;
        minutesWatch.innerHTML = 0;
        hoursWatch.innerHTML = 0;
    }
});


function stopWatch(btn, i) {
    if (btn.innerHTML == 'Stop') {
        if (i == 60) {
            i = 0;
            secondWatch.innerHTML = i;
            if (minutesWatch.innerHTML == 59) {
                minutesWatch = 0;
                hoursWatch.innerHTML++;
            } else{
                minutesWatch.innerHTML++;
            }
            
        } else{
            i++;
            secondWatch.innerHTML = i;
        }
        
        setTimeout(() => {
            stopWatch(btn, i);
        }, 1000);
    } 
}





