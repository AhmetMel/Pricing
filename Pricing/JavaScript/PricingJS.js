function changeKayakingCard(gozukencardId,gozukucekcardId)
        {   
            var gozukencard=document.getElementById(gozukencardId);
            var gozukucekcard=document.getElementById(gozukucekcardId);
            var kayakresmi=document.getElementById('kayak');
            var selaleresmi=document.getElementById('selale');
            var cadirresmi=document.getElementById('cadir');
            var cimenresmi=document.getElementById('cimen');
            var button=document.getElementById('kayaking-button');
            var button2=document.getElementById('camping-button');
            button.style.backgroundColor="rgb(2, 2, 63)";
            button.style.color="white";
            button2.style.backgroundColor="white";
            button2.style.color="black";
            gozukucekcard.style.transform="rotateY(360deg)";
            gozukucekcard.style.opacity="1";
            gozukucekcard.style.top="0px";
            gozukucekcard.style.left="0px";
            gozukencard.style.transform="rotateY(180deg)";
            gozukencard.style.top="0px";
            gozukencard.style.left="0px";
            gozukencard.style.opacity="0";
            selaleresmi.style.transform="scale(1,1)";
            cadirresmi.style.transform="scale(0,0)";
            cimenresmi.style.transform="scale(0,0)";
            kayakresmi.style.top="-120px";
            kayakresmi.style.left="-70px";
        }
        function changeCampingCard(gozukencardId,gozukucekcardId)
        {   
            var gozukencard=document.getElementById(gozukencardId);
            var gozukucekcard=document.getElementById(gozukucekcardId);
            var kayakresmi=document.getElementById('kayak');
            var selaleresmi=document.getElementById('selale');
            var cadirresmi=document.getElementById('cadir');
            var cimenresmi=document.getElementById('cimen')
            var button=document.getElementById('kayaking-button');
            var button2=document.getElementById('camping-button');
            button.style.backgroundColor="white";
            button.style.color="black";
            button2.style.backgroundColor="rgb(1, 48, 1)";
            button2.style.color="white";
            gozukucekcard.style.transform="rotateY(360deg)";
            gozukucekcard.style.opacity="1";
            gozukucekcard.style.top="0px";
            gozukucekcard.style.left="0px";
            gozukencard.style.transform="rotateY(180deg)";
            gozukencard.style.top="0px";
            gozukencard.style.left="0px";
            gozukencard.style.opacity="0";
            selaleresmi.style.transform="scale(0,0)";
            cadirresmi.style.transform="scale(1,1)";
            cimenresmi.style.transform="scale(1,1)";
            kayakresmi.style.top="-180px";
            kayakresmi.style.left="10px";
        }