var Xchanger = Xchanger || {};

// this way stickers will take less space in both memory and storage:
Xchanger.stickersFields = {
    label: 'l',
    count: 'c',
    position: 'p'
};

Xchanger.dictionary = {
    phrasses: {
        'failed_to_store_to_local_storage': {
            eng: 'Failed to store current sticker\'s set to device, please try with restart of software or device, there\'s a possibility that this problem may dissapear that way. Thank you!', 
            srb: 'Скуп сличица није успешно сачуван на уређају, молимо Вас да поново покушате да покренете програм или сам уређај, постоји могућност да ће на такав начин овај проблем бити елиминисан. Хвала!'
        }
    },
    words: {
        'all_stickers': {
            eng: 'All', 
            srb: 'Све'
        },
        'missing_stickers': {
            eng: 'Missing', 
            srb: 'Недостајуће'
        },
        'duplicate_stickers': {
            eng: 'Duplicates', 
            srb: 'Дупликати'
        },
        'found_stickers': {
            eng: 'Found', 
            srb: 'Попуњене'
        },
    }
};

Xchanger.language = 'srb';

var storeStickers = function(stickers, key) {
    try {
        window.localStorage.setItem(key, JSON.stringify(stickers));
    }
    catch(e) {
        console.log('Failed to store to localStorage with the following error message:', e.message);
        
        alert(Xchanger.dictionary.phrasses.failed_to_store_to_local_storage[Xchanger.language]);
    }
};

var getStoredStickers = function(key) {key
    
};


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

        var position = 0;
        
        // ad descriptive sticker:
        var sticker = {};
            sticker[Xchanger.stickersFields.label] = '00';
            sticker[Xchanger.stickersFields.count] = -1;
            sticker[Xchanger.stickersFields.position] = position++;        
        Xchanger.stickers.push(sticker);

        // add numeric stickers:
        var i;
        for(i=1; i<640; i++) {
            sticker = {};
                sticker[Xchanger.stickersFields.label] = i.toString();
                sticker[Xchanger.stickersFields.count] = -1;
                sticker[Xchanger.stickersFields.position] = position++;        
            Xchanger.stickers.push(sticker);
        }
    } 
};

var drawStickers = function() {
    var i;
    for(i in Xchanger.stickers) {
        var currentStickerState = 'sticker-missing';
        if (Xchanger.stickers[i][Xchanger.stickersFields.count] === 0) {
            currentStickerState = 'sticker-found';
        }
        else if (Xchanger.stickers[i][Xchanger.stickersFields.count] > 0) {
            currentStickerState = 'sticker-duplicate';
        }

        $('.container').append('<div id="' + Xchanger.stickers[i][Xchanger.stickersFields.label] + '" class="sticker sticker-pointable ' + currentStickerState + '" data-pos="' + Xchanger.stickers[i][Xchanger.stickersFields.position] + '">' + Xchanger.stickers[i][Xchanger.stickersFields.label] + '</div>');
    }
};





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
                if (stickerModel[Xchanger.stickersFields.count] > -1) {
                    stickerModel[Xchanger.stickersFields.count] -= 1;
                }
            }
            else if ($(this).hasClass('sticker-add-one')) {
                console.log('... add one sticker');

                // increment current sticker's count by 1
                stickerModel[Xchanger.stickersFields.count] += 1; 
            }
            
            // update storage with the most recent data:
            storeStickers(Xchanger.stickers, 'stickerXchanger');

            // ... then check current sticker's state (count), after previous action:
            // add/remove appropriate classes:
            if (stickerModel[Xchanger.stickersFields.count] > 0) {
                actionItem.addClass('sticker-duplicate');
                actionItem.removeClass('sticker-missing sticker-found');             
            }
            else if (stickerModel[Xchanger.stickersFields.count] === 0) {
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
    
});


// initialize some language phrasses:
$('.stickers-tab-all').text(Xchanger.dictionary.words.all_stickers[Xchanger.language]);
$('.stickers-tab-missing').text(Xchanger.dictionary.words.missing_stickers[Xchanger.language]);
$('.stickers-tab-duplicates').text(Xchanger.dictionary.words.duplicate_stickers[Xchanger.language]);
$('.stickers-tab-found').text(Xchanger.dictionary.words.found_stickers[Xchanger.language]);
