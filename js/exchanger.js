var Xchanger = Xchanger || {};

// this way stickers will take less space in both memory and storage:
Xchanger.stickersFields = {
    label: 'l',
    count: 'c',
    position: 'p'
};

Xchanger.albums = {
    default: 'stickerXchanger'
}

Xchanger.offered = {};
Xchanger.needed = {};

Xchanger.dictionary = {
    phrasses: {
        'failed_to_store_to_local_storage': {
            eng: 'Failed to store current sticker\'s set to device, please try with restart of software or device, there\'s a possibility that this problem may dissapear that way. Thank you!', 
            srb: 'Скуп сличица није успешно сачуван на уређају, молимо Вас да поново покушате да покренете програм или сам уређај, постоји могућност да ће на такав начин овај проблем бити елиминисан. Хвала!'
        },
        'backup_album_text': {
            eng: 'Copy all the text from text area below and paste whereever you\'d like it to be backed up, click "Done" when you\'re done:',
            srb: 'Копирајте сав текст из поља испод где год желите и тамо га сачувајте, кликните "Готово" када сте завршили:'
        },
        'restore_album_text': {
            eng: 'Take backed-up text of your album and paste into the text area below and click "Done" when you\'re done:',
            srb: 'Узмите претходно сачуван текст вашег албума и налепите у поље испод па кликните "Готово" када сте завршили:'
        },
        'failed_to_get_from_local_storage': {
            eng: 'Failed to get current sticker\'s set from device, please try with restart of software or device, there\'s a possibility that this problem may dissapear that way. Thank you!', 
            srb: 'Скуп сличица није успешно преузет са уређаја, молимо Вас да поново покушате да покренете програм или сам уређај, постоји могућност да ће на такав начин овај проблем бити елиминисан. Хвала!'
        },
        'failed_to_parse_from_local_storage': {
            eng: 'Failed to parse current sticker\'s set retreived from device, please try with restart of software or device, there\'s a possibility that this problem may dissapear that way. Thank you!', 
            srb: 'Скуп сличица који је преузет са уређаја није успешно процесуиран, молимо Вас да поново покушате да покренете програм или сам уређај, постоји могућност да ће на такав начин овај проблем бити елиминисан. Хвала!'
        },
        'failed_to_delete_item_from_local_storage': {
            eng: 'Failed to reset current Album on this device, please try with restart of software or device, there\'s a possibility that this problem may dissapear that way. Thank you!', 
            srb: 'Поништавања албума није успело на овом уређају, молимо Вас да поново покушате да покренете програм или сам уређај, постоји могућност да ће на такав начин овај проблем бити елиминисан. Хвала!'
        },
        'succeeded_to_parse_store_backup_data_to_local_storage': {
            eng: 'Album backup data was taken successfully.', 
            srb: 'Преузимање/чување претходно сачуваних података албума је успело.'            
        },
        'failed_to_parse_store_backup_data_to_local_storage': {
            eng: 'Failed to parse/store given backup data to this device, please try checking whether given data is proper JSON or try restarting software or device, there\'s a possibility that this problem may dissapear that way. Thank you!', 
            srb: 'Преузимање/чување претходно сачуваних података није успело на овом уређају, молимо Вас проверите да ли прослеђени подаци представљају валидан JSON или покушајте да поново покренете програм или сам уређај, постоји могућност да ће на такав начин овај проблем бити елиминисан. Хвала!'            
        },
        'reset_album': {
            eng: 'Reset album', 
            srb: 'Поништи албум'
        },
        'restore_album_from_backup': {
            eng: 'Restore album from Backup', 
            srb: 'Поврати сачувани Албум'
        },
        'backup_album': {
            eng: 'Backup album', 
            srb: 'Сачувај албум'
        },
        'reset_album_are_you_sure': {
            eng: 'Are you sure you want to reset this album (this operation can\'t be undone)?', 
            srb: 'Да ли сте сигурни да желите да бесповратно поништите тренутни албум?'
        },
        'exchange_pannel': {
            eng: 'Exchange Pannel:', 
            srb: 'За размену:'
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
        'Done': {
            eng: 'Done',
            srb: 'Готово'
        },
        'cancel': {
            eng: 'cancel',
            srb: 'одустани'
        },
    }
};

Xchanger.language = 'srb';


var resetAlbum = function(key) {
    if (confirm(Xchanger.dictionary.phrasses.reset_album_are_you_sure[Xchanger.language])) {
        try {
            Xchanger.stickers = generateBrasil2014Stickers();
            storeStickers(Xchanger.stickers, Xchanger.albums.default);

            // redraw stickers:
            drawStickers();
        }
        catch(e) {
            console.log('Failed to delete item from localStorage with the following error message:', e.message);
            
            alert(Xchanger.dictionary.phrasses.failed_to_delete_item_from_local_storage[Xchanger.language]);
        }        
    }
};

var storeStickers = function(stickers, key) {
    var success;
    try {
        window.localStorage.setItem(key, JSON.stringify(stickers));
        
        success = true;
    }
    catch(e) {
        console.log('Failed to store to localStorage with the following error message:', e.message);
        
        alert(Xchanger.dictionary.phrasses.failed_to_store_to_local_storage[Xchanger.language]);

        success = false;
    }
    
    return success;
};

var getStoredStickersRaw = function(key) {
    var storedStickers = null;

    try {
        var storedStickers = window.localStorage.getItem(key);
    }
    catch(e) {
        console.log('Failed to get stored stickers from localStorage with the following error message:', e.message);
        
        alert(Xchanger.dictionary.phrasses.failed_to_get_from_local_storage[Xchanger.language]);
    }
    
    return storedStickers;
};

var getStoredStickers = function(key) {
    var storedStickers = null;

    try {
        var storedStickers = getStoredStickersRaw(key);

        if (storedStickers) {
            storedStickers = JSON.parse(storedStickers);
        }
    }
    catch(e) {
        console.log('Failed to parse stored stickers from localStorage with the following error message:', e.message);
        
        alert(Xchanger.dictionary.phrasses.failed_to_parse_from_local_storage[Xchanger.language]);
    }
    
    return storedStickers;
};


var loadStickers = function() {
    Xchanger.stickers = Xchanger.stickers || [];

    // first check if there are already stickers stored for current album:
    var storedStickers = getStoredStickers(Xchanger.albums.default);

    if (storedStickers) {
        Xchanger.stickers = storedStickers;
    }
    else {
        Xchanger.stickers = generateBrasil2014Stickers();
    } 
};

var redrawExchange = function() {
    $('.stickers-exchange-block').empty();
    
    var i;

    for(i in Xchanger.offered) {
        $('.stickers-exchange-block').append('<span class="stickers-offered">' + Xchanger.offered[i][Xchanger.stickersFields.label] + '</span>');
    }

    $('.stickers-exchange-block').append('<hr />');

    for(i in Xchanger.needed) {
        $('.stickers-exchange-block').append('<span class="stickers-needed">' + Xchanger.needed[i][Xchanger.stickersFields.label] + '</span>');
    }
};

var generateBrasil2014Stickers = function() {
    var stickers = [];

    var position = 0;
    
    // ad descriptive sticker:
    var sticker = {};
        sticker[Xchanger.stickersFields.label] = '00';
        sticker[Xchanger.stickersFields.count] = -1;
        sticker[Xchanger.stickersFields.position] = position++;        
    stickers.push(sticker);

    // add numeric stickers:
    var i;
    for(i=1; i<640; i++) {
        sticker = {};
            sticker[Xchanger.stickersFields.label] = i.toString();
            sticker[Xchanger.stickersFields.count] = -1;
            sticker[Xchanger.stickersFields.position] = position++;        
        stickers.push(sticker);
    }
    
    return stickers;
};

var drawStickers = function() {
    // first get rid of old event handlers and empty stickers' container:
    $('.sticker').off('click');
    $('.sticker-action-item').off('click');
    $('.container').empty();

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


    // jQuery binds:
    $('.sticker').on('click', function(){
        var actionItem = $(this);
        
        if (!actionItem.find('.sticker-action').length) {
            // actionItem.append('<div class="sticker-action"><div class="sticker-action-item sticker-pointable sticker-remove-one">-1</div><div class="sticker-action-item sticker-pointable sticker-do-nothing">X</div><div class="sticker-action-item sticker-pointable sticker-add-one">+1</div></div>');

            actionItem.append('<div class="sticker-action"><div class="sticker-action-item sticker-pointable sticker-offered-one">Offer</div><div class="sticker-action-item sticker-pointable sticker-remove-one">-1</div><div class="sticker-action-item sticker-pointable sticker-do-nothing">X</div><div class="sticker-action-item sticker-pointable sticker-add-one">+1</div><div class="sticker-action-item sticker-pointable sticker-needed-one">Need</div></div>');


            $(this).removeClass('sticker-pointable');



            actionItem.find('.sticker-action .sticker-action-item').on('click', function(e) {
                console.log('Sticker action has been chosen:');

                // stop propagating this click to parent containers:
                e.stopPropagation();
                
                var stickerPos;
                try {
                    stickerPos = parseInt(actionItem.data('pos'));
                }
                catch (e) {
                    console.log('Failed to get current sticker\'s position:', e.message);
                    stickerPos = null;
                }
                if (typeof stickerPos === 'number') {
                    var stickerModel = Xchanger.stickers[stickerPos];

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
                    else if ($(this).hasClass('sticker-offered-one')) {
                        console.log('... offer one sticker');

                        // mark sticker as offered one (if not already marked as such):
                        if (!Xchanger.offered[stickerModel[Xchanger.stickersFields.position]]) {
                            Xchanger.offered[stickerModel[Xchanger.stickersFields.position]] = stickerModel;
                        }
                        
                        redrawExchange();
                    }
                    else if ($(this).hasClass('sticker-needed-one')) {
                        console.log('... need this sticker');

                        // mark sticker as needed one (if not already marked as such):
                        if (!Xchanger.needed[stickerModel[Xchanger.stickersFields.position]]) {
                            Xchanger.needed[stickerModel[Xchanger.stickersFields.position]] = stickerModel;
                        }

                        redrawExchange();
                    }
                    
                    // update storage with the most recent data:
                    storeStickers(Xchanger.stickers, Xchanger.albums.default);

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
                }

                // add back pointer style to .sticker:
                actionItem.addClass('sticker-pointable');

                // first remove event handler since it's parent container is about to be removed:
                $(this).off('click');

                // then remove it:
                $(this).parent().remove();
            });


            // but make it dissapear in a two seconds (only if it's visible):
            setTimeout(function(){
                if (actionItem.find('.sticker-action .sticker-action-item.sticker-do-nothing:visible').length) {
                    actionItem.find('.sticker-action .sticker-action-item.sticker-do-nothing').trigger('click');
                }
            }, 2000);
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
};


var createStaticBinds = function() {
    $('.backup-album').on('click', function(e) {
        e.stopPropagation();

        $('.backup-restore-album-label').text(Xchanger.dictionary.phrasses.backup_album_text[Xchanger.language]);

        $('textarea[name=backup-restore-album]').val(getStoredStickersRaw(Xchanger.albums.default));
        $('textarea[name=backup-restore-album]').attr('readonly', true);
        $('.backup-restore-album-cancel').hide();
        $('.backup-restore-wrapper').slideDown();
        
        // $('footer').prepend('<div class="backup-album-wrapper"><label class="backup-album-label">' + Xchanger.dictionary.phrasses.backup_album_text[Xchanger.language] + '</label><textarea name="backup-album">' + getStoredStickersRaw(Xchanger.albums.default) + '</textarea><input id="backup_album_done" type="button" value="' + Xchanger.dictionary.words.Done[Xchanger.language] + '" /></div>');
    });

    $('.restore-album').on('click', function(e) {
        e.stopPropagation();

        $('.backup-restore-album-label').text(Xchanger.dictionary.phrasses.restore_album_text[Xchanger.language]);

        $('textarea[name=backup-restore-album]').val('');
        $('textarea[name=backup-restore-album]').removeAttr('readonly');
        $('.backup-restore-album-cancel').show();
        $('.backup-restore-wrapper').slideDown();

    });
    
    $('.backup-restore-album-cancel').on('click', function(e) {
        e.stopPropagation();
        
        $('.backup-restore-wrapper').slideUp();
    });    

    $('.backup-restore-album-done').on('click', function(e) {
        e.stopPropagation();
        
        if ($('.backup-restore-album-cancel:visible').length) {
            // this means that "backup album" has been triggered:
            
            try {
                var toRestore = $('textarea[name=backup-restore-album]').val();
                if (toRestore) {
                    toRestore = JSON.parse(toRestore);
                }

                if (toRestore && storeStickers(toRestore, Xchanger.albums.default)) {
                    Xchanger.stickers = toRestore;
                    drawStickers();

                    alert(Xchanger.dictionary.phrasses.succeeded_to_parse_store_backup_data_to_local_storage[Xchanger.language]);               
                }
            }
            catch(e) {
                console.log('Failed to parse/store backup data to localStorage with the following error message:', e.message);
                
                alert(Xchanger.dictionary.phrasses.failed_to_parse_store_backup_data_to_local_storage[Xchanger.language]);
            }
        }

        $('.backup-restore-wrapper').slideUp();
    });

    $('.reset-album').on('click', function(e) {
        e.stopPropagation();
      
        resetAlbum(Xchanger.albums.default);
    });
};



// set the stage up:
loadStickers();
drawStickers();
createStaticBinds();


// initialize some language phrasses:
$('.stickers-tab-all').text(Xchanger.dictionary.words.all_stickers[Xchanger.language]);
$('.stickers-tab-missing').text(Xchanger.dictionary.words.missing_stickers[Xchanger.language]);
$('.stickers-tab-duplicates').text(Xchanger.dictionary.words.duplicate_stickers[Xchanger.language]);
$('.stickers-tab-found').text(Xchanger.dictionary.words.found_stickers[Xchanger.language]);
$('.backup-album').text(Xchanger.dictionary.phrasses.backup_album[Xchanger.language]);
$('.restore-album').text(Xchanger.dictionary.phrasses.restore_album_from_backup[Xchanger.language]);
$('.reset-album').text(Xchanger.dictionary.phrasses.reset_album[Xchanger.language]);
$('.backup-restore-album-done').attr('value', Xchanger.dictionary.words.Done[Xchanger.language]);
$('.backup-restore-album-cancel').attr('value', Xchanger.dictionary.words.cancel[Xchanger.language]);
$('.sticker-exchange-title').text(Xchanger.dictionary.phrasses.exchange_pannel[Xchanger.language]);
