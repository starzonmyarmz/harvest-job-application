/*global _ */

var s, App = {

  settings: {
    cancel: '.js-cancel',
    duration: '.js-duration',
    edit: '.js-edit-entry',
    form: $('#master-form'),
    list: $('.day-view-entry-list'),
    listTemplate: $('#list-template').html(),
    plus: $('.js-new-time-entry'),
    root: $('.js-harvest-current-view'),
    save: '.js-save'
  },

  init: function() {
    s = this.settings;

    $('.chzn-select').chosen();

    this.events();
  },

  events: function() {

    s.plus.on('click', function() {
      $('li table').show()
      App.addNewEntry();
      return false;
    });

    s.root.on('click', s.cancel, function() {
      App.cancelEntry($(this).parents('form'));
      App.resetForm();
      return false;
    });

    s.root.on('focus', s.duration, function() {
      $('.nef-duration .pop-over').addClass('show');
      return false;
    });

    s.root.on('blur', s.duration, function() {
      $('.nef-duration .pop-over').removeClass('show');
      return false;
    });

    s.root.on('click', s.save, function() {
      App.saveEntry($(this).parents('form'));
      App.resetForm();
      return false;
    });

    // Change button text based on "hours" value
    s.root.on('keyup', s.duration, function() {
        if ($(this).val()) {
          $('.js-save').val('Save Entry');
        } else {
          $('.js-save').val('Start Timer');
        }
    });

    s.root.on('click', s.edit, function() {
      var li = $(this).parents('li');
      s.plus.removeClass('is-disabled');
      $('form.new-entry-form').hide()
      $('li table').show()
      // Only append the cloned form if it doesn't exist
      if (li.find('form.new-entry-form').length === 0) {
        App.cloneForm(li);
      }
      li.find('table').hide();
      if (!li.find('form.new-entry-form').is(":visible")) {
        li.find('form.new-entry-form').show();
      }
    });

    s.root.on('click', '.js-start-timer, .js-stop-timer', function() {
      App.toggleTimer($(this));
      return false;
    });

    // Make "New Entry" button fixed
    $(document).on('scroll', function() {
        if ($(this).scrollTop() > $('.day-view-week-nav').offset().top - 20) {
            s.plus.addClass('sticky');
        } else {
            s.plus.removeClass('sticky');
        }
    });
  },

  addNewEntry: function() {
    s.plus.addClass('is-disabled');
    $('li > form').hide();
    s.form.show();

    $('html, body').animate({
      scrollTop: s.form.offset().top
     }, 250);

  },

  appendNewEntry: function() {
    s.list.append(_.template(s.listTemplate, { task: s.form.serializeArray() }));
  },

  cancelEntry: function(el) {
    s.plus.removeClass('is-disabled');
    el.hide().prev().show();
  },

  cloneForm: function(row) {
    // Hardcore jQuery Chaining :P
    s.form.clone()
      .attr('id','').addClass('form-clone')
      .find('h2').text('Edit Time Entry').end()
      .find('.js-notes').val(row.find('.notes')[0].innerText).end()
      .find('.js-duration').val(row.find('.entry-time').text()).end()
      .find('.js-save').val('Save Entry').end()
      .find('.chzn-container').remove().end()
      .appendTo(row).show();
    row.find('.chzn-select').removeClass('chzn-done').chosen();
    row.find('a.chzn-single').removeClass('chzn-default');
    row.find('.nef-projects span').text(row.find('span.project').text());
    row.find('.nef-tasks span').text(row.find('span.task').text());
  },

  resetForm: function() {
    s.form[0].reset();
  },

  saveEntry: function(el) {
    App.cancelEntry(el);
    if (el.attr('id') === 'master-form') {
      App.appendNewEntry();
    }
  },

  toggleTimer: function(el) {
    el.toggleClass('button-running js-start-timer js-stop-timer');
    var html = '<b class="running-icon"><i></i></b>';
    if (el[0].innerText === 'Start') {
      el.html(html + 'Stop');
    } else {
      el.html(html + 'Start');
    }
  }

};

App.init();
