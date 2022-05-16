'use strict';

(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.list_of_plans = {
    attach: function attach(context, settings) {
      // Show only 8 items at first.
      let initialPlanCount = $(".list-of-plans__plan").length;

      let numberOfItems = 8;
      let showMoreItems = 8;

      if (initialPlanCount > numberOfItems) {
        $(".list-of-plans__plan").hide();
        $(".list-of-plans__plan:lt(" + numberOfItems + ")").show();
      }

      // Show more items when clicking the button.
      $(".pager-button").click(function(e) {
        e.preventDefault();

        numberOfItems = numberOfItems + showMoreItems;
        $(".list-of-plans__plan:lt(" + numberOfItems + ")").show();

        // Scroll to the bottom of the list.
        //TODO

        // Hide the button when all items are visible.
        if (numberOfItems >= initialPlanCount) {
          $(".pager-button").hide();
        }
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
