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

Xchanger.exchanges = {};
Xchanger.exchanges.offered = {};
Xchanger.exchanges.needed = {};

Xchanger.dictionary = {
    phrasses: {
        'failed_to_store_to_local_storage': {
            eng: 'Failed to store current sticker\'s set to device, please try with restart of software or device, there\'s a possibility that this problem may dissapear that way. Thank you!', 
            srb: 'Скуп сличица није успешно сачуван на уређају, молимо Вас да поново покушате да покренете програм или сам уређај, постоји могућност да ће на такав начин овај проблем бити елиминисан. Хвала!'
        },
        'failed_to_store_exchanges_to_local_storage': {
            eng: 'Failed to store current sticker\'s exchanges to device, please try with restart of software or device, there\'s a possibility that this problem may dissapear that way. Thank you!', 
            srb: 'Скуп сличица за замену није успешно сачуван на уређају, молимо Вас да поново покушате да покренете програм или сам уређај, постоји могућност да ће на такав начин овај проблем бити елиминисан. Хвала!'
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
        'failed_to_get_exchanges_from_local_storage': {
            eng: 'Failed to get current sticker\'s exchange set from device, please try with restart of software or device, there\'s a possibility that this problem may dissapear that way. Thank you!', 
            srb: 'Скуп сличица за размену није успешно преузет са уређаја, молимо Вас да поново покушате да покренете програм или сам уређај, постоји могућност да ће на такав начин овај проблем бити елиминисан. Хвала!'
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
        'to_exchange': {
            eng: 'To Exchange', 
            srb: 'За Размену'
        },
        'Exchange_now': {
            eng: 'Exchange now',
            srb: 'Размени сад'
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
        'Offer': {
            eng: 'Offer',
            srb: 'Нудим'
        },
        'Need': {
            eng: 'Need',
            srb: 'Тражим'
        },
        'Close': {
            eng: 'Close',
            srb: 'Затвори'
        },
        'Reset': {
            eng: 'Reset',
            srb: 'Поништи'
        },
        'Delete': {
            eng: 'Delete',
            srb: 'Обриши'
        },
        'Add': {
            eng: 'Add',
            srb: 'Додај'
        },
        'Remove': {
            eng: 'Remove',
            srb: 'Склони'
        }
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
        storedStickers = window.localStorage.getItem(key);
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
        storedStickers = getStoredStickersRaw(key);

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

var storeExchanges = function(exchanges, key) {
    var success;
    try {
        window.localStorage.setItem(key, JSON.stringify(exchanges));
        
        success = true;
    }
    catch(e) {
        console.log('Failed to store Exchanges to localStorage with the following error message:', e.message);
        
        alert(Xchanger.dictionary.phrasses.failed_to_store_exchanges_to_local_storage[Xchanger.language]);

        success = false;
    }
    
    return success;
};

var getStoredExchanges = function(key) {
    var storedExchanges = null;

    try {
        var tmpStoredExchanges = window.localStorage.getItem(key);

        if (tmpStoredExchanges) {
            storedExchanges = JSON.parse(tmpStoredExchanges);
        }
    }
    catch(e) {
        console.log('Failed to get stored exchanges from localStorage with the following error message:', e.message);
        
        alert(Xchanger.dictionary.phrasses.failed_to_get_exchanges_from_local_storage[Xchanger.language]);
        
        storedExchanges = null;
    }
    
    return storedExchanges;
};

var redrawExchanges = function() {
    $('.stickers-exchange-block a').off('click');
    $('.stickers-exchange-block').empty();
    
    if (objlen(Xchanger.exchanges.offered) || objlen(Xchanger.exchanges.needed)) {
        var i;

        for(i in Xchanger.exchanges.offered) {
            $('.stickers-exchange-block').append('<a href="javascript:void(0);" class="stickers-offered" data-pos="' + i + '" title="' + Xchanger.dictionary.words.Delete[Xchanger.language] + '">' + Xchanger.exchanges.offered[i][Xchanger.stickersFields['label']] + '</a>');
        }

        $('.stickers-exchange-block').append('<hr />');

        for(i in Xchanger.exchanges.needed) {
            $('.stickers-exchange-block').append('<a href="javascript:void(0);" class="stickers-needed" data-pos="' + i + '" title="' + Xchanger.dictionary.words.Delete[Xchanger.language] + '">' + Xchanger.exchanges.needed[i][Xchanger.stickersFields['label']] + '</a>');
        }


        $('.stickers-exchange-block a').on('click', function() {
            if ($(this).hasClass('stickers-offered')) {
                // offered sticker should be removed from Exchange Pane:
                delete Xchanger.exchanges.offered[$(this).data('pos')];

                // update storage with the most recent exchanges:
                storeExchanges(Xchanger.exchanges, 'stickerXchanger-exchanges');
            }
            else if ($(this).hasClass('stickers-needed')) {
                // offered sticker should be removed from Exchange Pane:
                delete Xchanger.exchanges.needed[$(this).data('pos')];

                // update storage with the most recent exchanges:
                storeExchanges(Xchanger.exchanges, 'stickerXchanger-exchanges');
            }
            
            redrawExchanges();
        });

        
        $('.stickers-exchange-wrapper').slideDown();
    }
    else if ($('.stickers-exchange-wrapper:visible').length) {
        $('.stickers-exchange-wrapper').slideUp();
    }
};

var generateBrasil2014Stickers = function() {
    var stickers = [];

    var position = 0;
    
    // ad descriptive sticker:
    var sticker = {};
        sticker[Xchanger.stickersFields['label']] = '00';
        sticker[Xchanger.stickersFields.count] = -1;
        sticker[Xchanger.stickersFields.position] = position++;        
    stickers.push(sticker);

    // add numeric stickers:
    var i;
    for(i=1; i<640; i++) {
        sticker = {};
            sticker[Xchanger.stickersFields['label']] = i.toString();
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

        $('.container').append('<div id="' + Xchanger.stickers[i][Xchanger.stickersFields['label']] + '" class="sticker pointable ' + currentStickerState + '" data-pos="' + Xchanger.stickers[i][Xchanger.stickersFields.position] + '">' + Xchanger.stickers[i][Xchanger.stickersFields['label']] + '</div>');
    }


    // jQuery binds:
    $('.sticker').on('click', function(){
        var actionItem = $(this);
        
        if (!actionItem.find('.sticker-action').length) {
            var offered_one_markup = '';
            if (actionItem.hasClass('sticker-duplicate')) {
                offered_one_markup = '<div class="sticker-action-item pointable sticker-offered-one">' + Xchanger.dictionary.words.Offer[Xchanger.language] + '</div>';
            }

            var needed_one_markup = '';
            if (actionItem.hasClass('sticker-missing')) {
                needed_one_markup = '<div class="sticker-action-item pointable sticker-needed-one">' + Xchanger.dictionary.words.Need[Xchanger.language] + '</div>';
            }


            actionItem.append('<div class="sticker-action">' + offered_one_markup + '<div class="sticker-action-item pointable sticker-remove-one">' + Xchanger.dictionary.words.Remove[Xchanger.language] + '</div><div class="sticker-action-item pointable sticker-do-nothing">' + Xchanger.dictionary.words.cancel[Xchanger.language] + '</div><div class="sticker-action-item pointable sticker-add-one">' + Xchanger.dictionary.words.Add[Xchanger.language] + '</div>' + needed_one_markup + '</div>');


            $(this).removeClass('pointable');



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
                        if (!Xchanger.exchanges.offered[stickerModel[Xchanger.stickersFields.position]]) {
                            Xchanger.exchanges.offered[stickerModel[Xchanger.stickersFields.position]] = stickerModel;
                        }
                        
                        // update storage with the most recent exchanges:
                        storeExchanges(Xchanger.exchanges, 'stickerXchanger-exchanges');

                        redrawExchanges();
                    }
                    else if ($(this).hasClass('sticker-needed-one')) {
                        console.log('... need this sticker');

                        // mark sticker as needed one (if not already marked as such):
                        if (!Xchanger.exchanges.needed[stickerModel[Xchanger.stickersFields.position]]) {
                            Xchanger.exchanges.needed[stickerModel[Xchanger.stickersFields.position]] = stickerModel;
                        }

                        // update storage with the most recent exchanges:
                        storeExchanges(Xchanger.exchanges, 'stickerXchanger-exchanges');

                        redrawExchanges();
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
                actionItem.addClass('pointable');

                // first remove event handler since it's parent container is about to be removed:
                $(this).off('click');

                // then remove it:
                $(this).parent().remove();
            });


            // but make it dissapear in a three seconds (only if it's visible):
            setTimeout(function(){
                if (actionItem.find('.sticker-action .sticker-action-item.sticker-do-nothing:visible').length) {
                    actionItem.find('.sticker-action .sticker-action-item.sticker-do-nothing').trigger('click');
                }
            }, 3000);
        }

    });

    $('.stickers-tabs a').on('click', function(e) {
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

    $('.sticker-exchange-close').on('click', function(e) {
        e.stopPropagation();

        $('.stickers-exchange-wrapper').slideUp();
    });
    
    $('.sticker-exchange-reset').on('click', function(e) {
        e.stopPropagation();

        Xchanger.exchanges.offered = {};
        Xchanger.exchanges.needed = {};

        // update storage with the most recent exchanges:
        storeExchanges(Xchanger.exchanges, 'stickerXchanger-exchanges');

        $('.stickers-exchange-wrapper').slideUp();
    });

    $('.to-exchange-section').on('click', function(e) {
        e.stopPropagation();
       
        if ($('.stickers-exchange-wrapper:visible').length) {
            $('.stickers-exchange-wrapper').slideUp(); 
        }
        else {
            $('.stickers-exchange-wrapper').slideDown(); 
        }
    });
    
    $('.sticker-exchange-exchange').on('click', function(e) {
        e.stopPropagation();
        
        // iterate over exchange set (offered and needed) and apply to current stickers' set:
        var i;

        for(i in Xchanger.exchanges.offered) {
            Xchanger.stickers[Xchanger.exchanges.offered[i][Xchanger.stickersFields.position]][Xchanger.stickersFields.count]--;
        }

        for(i in Xchanger.exchanges.needed) {
            Xchanger.stickers[Xchanger.exchanges.needed[i][Xchanger.stickersFields.position]][Xchanger.stickersFields.count]++;
        }

        // ok so now store sticker's model to storage since it's updated with suggested exchanges:
        storeStickers(Xchanger.stickers, Xchanger.albums.default);

        // redraw stickers:
        drawStickers();
        
        // empty offered and needed since it's transferred to stickers' model:
        Xchanger.exchanges.offered = {};
        Xchanger.exchanges.needed = {};

        // update storage with the most recent exchanges:
        storeExchanges(Xchanger.exchanges, 'stickerXchanger-exchanges');
        
        // and finally redray exchanges (empty, though):
        redrawExchanges();
    });
};





// custom functions:
var objlen = function(obj) {
    var len = false;
    
    if (typeof obj === 'object') {
        len = 0;

        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                len++;
            }
        }
    }
    
    return len;
}





// prepare exchange data:
var storedExchanges = getStoredExchanges('stickerXchanger-exchanges');
if (storedExchanges) {
    Xchanger.exchanges = storedExchanges;
}

// set up the stage:
if (objlen(Xchanger.exchanges.offered) || objlen(Xchanger.exchanges.needed)) {
    redrawExchanges();
}
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
$('.to-exchange-section').text(Xchanger.dictionary.phrasses.to_exchange[Xchanger.language]);
$('.sticker-exchange-title').text(Xchanger.dictionary.phrasses.to_exchange[Xchanger.language]);
$('.sticker-exchange-close').text(Xchanger.dictionary.words.Close[Xchanger.language]);
$('.sticker-exchange-reset').text(Xchanger.dictionary.words['Reset'][Xchanger.language]);
$('.sticker-exchange-exchange').text(Xchanger.dictionary.phrasses.Exchange_now[Xchanger.language]);

