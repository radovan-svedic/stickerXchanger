var Xchanger = Xchanger || {};

var generateStickers = function() {
    Xchanger.stickers = Xchanger.sticker || [];

    // first check if there are already stickers stored:
    var storedStickers = window.localStorage.getItem('stickerXchanger');

    if (storedStickers) {
        storedStickers = JSON.parse(storedStickers);

        if (storedStickers) {
            Xchanger.stickers = storedStickers;
        }
    }
    else {

        var pos = 0;
        
        // ad descriptive sticker:
        Xchanger.stickers.push({label: '00', count: -1, pos: pos++});

        // add numeric stickers:    
        var i;
        for(i=1; i<640; i++) {
            Xchanger.stickers.push({label: i.toString(), count: -1, pos: pos++});
        }
    } 
}

var drawStickers = function() {
    var i;
    for(i in Xchanger.stickers) {
        var currentStickerState = 'sticker-missing';
        if (Xchanger.stickers[i].count === 0) {
            currentStickerState = 'sticker-found';
        }
        else if (Xchanger.stickers[i].count > 0) {
            currentStickerState = 'sticker-duplicate';
        }

        $('.container').append('<div id="' + Xchanger.stickers[i].label + '" class="sticker sticker-pointable ' + currentStickerState + '" data-pos="' + Xchanger.stickers[i].pos + '">' + Xchanger.stickers[i].label + '</div>');
    }
}





generateStickers();
drawStickers();



// jQuery binds:
$('.sticker').on('click', function(){
    var actionItem = $(this);
    
    if (!actionItem.find('.sticker-action').length) {
        actionItem.append('<div class="sticker-action"><div class="sticker-action-item sticker-pointable sticker-remove-one">-1</div><div class="sticker-action-item sticker-pointable sticker-do-nothing">X</div><div class="sticker-action-item sticker-pointable sticker-add-one">+1</div></div>');



        // actionItem.append('<div class="sticker-action"><div class="sticker-action-item sticker-pointable sticker-offered-one">Nudim</div><div class="sticker-action-item sticker-pointable sticker-remove-one">-1</div><div class="sticker-action-item sticker-pointable sticker-do-nothing">X</div><div class="sticker-action-item sticker-pointable sticker-add-one">+1</div><div class="sticker-action-item sticker-pointable sticker-needed-one">Tražim</div></div>');


        $(this).removeClass('sticker-pointable');



        actionItem.find('.sticker-action .sticker-action-item').on('click', function(e) {
            console.log('Sticker action has been chosen:');

            // stop propagating this click to parent containers:
            e.stopPropagation();
            
            var stickerModel = Xchanger.stickers[actionItem.data('pos')];

            // figure out exact action that has been taken:
            if ($(this).hasClass('sticker-do-nothing')) {
                console.log('... no action');
            }
            else if ($(this).hasClass('sticker-remove-one')) {
                console.log('... remove one sticker');
                
                // reduce current sticker's count by 1
                // but make sure it's never less than -1
                if (stickerModel.count > -1) {
                    stickerModel.count -= 1;
                }
            }
            else if ($(this).hasClass('sticker-add-one')) {
                console.log('... add one sticker');

                // increment current sticker's count by 1
                stickerModel.count += 1; 
            }
            
            // update storage with the most recent data:
            window.localStorage.setItem('stickerXchanger', JSON.stringify(Xchanger.stickers));

            // ... then check current sticker's state (count), after previous action:
            // add/remove appropriate classes:
            if (stickerModel.count > 0) {
                actionItem.addClass('sticker-duplicate');
                actionItem.removeClass('sticker-missing sticker-found');             
            }
            else if (stickerModel.count === 0) {
                actionItem.addClass('sticker-found');                
                actionItem.removeClass('sticker-missing sticker-duplicate');             
            }
            else {
                actionItem.addClass('sticker-missing');
                actionItem.removeClass('sticker-duplicate sticker-found');             
            }

            // add back pointer style to .sticker:
            actionItem.addClass('sticker-pointable');

            // first remove event handler since it's parent container is about to be removed:
            $(this).off('click');

            // then remove it:
            $(this).parent().remove();
        });


    }

});

$('.stickers_tabs a').on('click', function(e) {
    console.log('Sticker tab filter has been chosen:');

    // stop propagating this click to parent containers:
    e.stopPropagation();
    
    var stickersModel = Xchanger.stickers;


    // figure out exact tab filter that was selected:
    if ($(this).hasClass('stickers-tab-all')) {
        console.log('... all stickers');
        
        $('.sticker').show();
    }
    else if ($(this).hasClass('stickers-tab-missing')) {
        console.log('... missing stickers');

        $('.sticker').hide();
        $('.sticker-missing').show();        
    }
    else if ($(this).hasClass('stickers-tab-duplicates')) {
        console.log('... duplicate stickers');

        $('.sticker').hide();
        $('.sticker-duplicate').show();        
    }
    else if ($(this).hasClass('stickers-tab-found')) {
        console.log('... found stickers');

        $('.sticker').hide();
        $('.sticker-duplicate').show();        
        $('.sticker-found').show();        
    }
    
})