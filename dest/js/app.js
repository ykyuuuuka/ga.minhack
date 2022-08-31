function submit_join_group() {
    let el_form = document.forms.form;
    let value = el_form.value.value;

    dataLayer.push({
        event: 'join_group',
        group_id: value 
    });
    submit_success();
}

function submit_login() {
    let el_form = document.forms.form;
    let value = el_form.value.value;

    dataLayer.push({
        event: 'login',
        method: value 
    });
    submit_success();
}

function submit_search() {
    let el_form = document.forms.form;
    let value = el_form.value.value;

    dataLayer.push({
        event: 'search',
        search_term: value 
    });
    submit_success();
}

function submit_select_content() {
    let el_form = document.forms.form;
    let value1 = el_form.value1.value;
    let value2 = el_form.value2.value;

    dataLayer.push({
        event: 'select_content',
        content_type: value1,
        item_id: value2
    });
    submit_success();
}

function submit_share() {
    let el_form = document.forms.form;
    let value1 = el_form.value1.value;
    let value2 = el_form.value2.value;
    let value3 = el_form.value3.value;

    dataLayer.push({
        event: 'share',
        method: value1,
        content_type: value2,
        item_id: value3
    });
    submit_success();
}

function submit_sign_up() {
    let el_form = document.forms.form;
    let value = el_form.value.value;

    dataLayer.push({
        event: 'sign_up',
        method: value
    });
    submit_success();
}

function submit_tutorial_begin() {
    dataLayer.push({
        event: 'tutorial_begin'
    });
    submit_success();
}

function submit_tutorial_complete() {
    dataLayer.push({
        event: 'tutorial_complete'
    });
    submit_success();
}

function submit_purchase() {
    let el_form = document.forms.form;
    let value1 = el_form.value1.value;
    let value2 = el_form.value2.value;
    let value3 = el_form.value3.value;
    let value4 = el_form.value4.value;
    let value5 = el_form.value5.value;
    let value6 = el_form.value6.value;
    let value7 = el_form.value7.value;
    let value8 = el_form.value8.value;

    dataLayer.push({
        event: 'purchase',
        currency: value1,
        transaction_id: value2,
        value: value3,
        affiliation: value4,
        coupon: value5,
        shipping: value6,
        tax: value7,
        items: value8
    });
    submit_success();
    set_randam_num();
}

function submit_success() {
    let el = document.getElementById('submit_success');
    el.style.opacity = 1;
    setTimeout(function(){
        el.style.opacity = 0;
    },2000);
}

function set_randam_num() {
    let min = 1000;
    let max = 1999;
    let num = Math.floor( Math.random() * (max + 1 - min) ) + min ;
    num = ( '' + num ).slice( -3 );
    let date = new Date();
    result = date.getMonth()+1+''+date.getDate()+''+date.getHours()+''+date.getMinutes()+''+date.getSeconds()+''+num
    document.querySelectorAll('[name="value2"]')[0].value = result;
}

document.addEventListener('DOMContentLoaded', function() {
    if(document.querySelectorAll('[data-js="join_group"]')[0]) {
        document.querySelectorAll('[data-js="join_group"]')[0].onclick = function() {
            submit_join_group();
        }
    }
    if(document.querySelectorAll('[data-js="login"]')[0]) {
        document.querySelectorAll('[data-js="login"]')[0].onclick = function() {
            submit_login();
        }
    }
    if(document.querySelectorAll('[data-js="search"]')[0]) {
        document.querySelectorAll('[data-js="search"]')[0].onclick = function() {
            submit_search();
        }
    }
    if(document.querySelectorAll('[data-js="select_content"]')[0]) {
        document.querySelectorAll('[data-js="select_content"]')[0].onclick = function() {
            submit_select_content();
        }
    }
    if(document.querySelectorAll('[data-js="share"]')[0]) {
        document.querySelectorAll('[data-js="share"]')[0].onclick = function() {
            submit_share();
        }
    }
    if(document.querySelectorAll('[data-js="sign_up"]')[0]) {
        document.querySelectorAll('[data-js="sign_up"]')[0].onclick = function() {
            submit_sign_up();
        }
    }
    if(document.querySelectorAll('[data-js="tutorial_begin"]')[0]) {
        document.querySelectorAll('[data-js="tutorial_begin"]')[0].onclick = function() {
            submit_tutorial_begin();
        }
    }
    if(document.querySelectorAll('[data-js="tutorial_complete"]')[0]) {
        document.querySelectorAll('[data-js="tutorial_complete"]')[0].onclick = function() {
            submit_tutorial_complete();
        }
    }
    if(document.querySelectorAll('[data-js="purchase"]')[0]) {
        set_randam_num();
        document.querySelectorAll('[data-js="purchase"]')[0].onclick = function() {
            submit_purchase();
        }
    }
});