// Q1
// $(document).ready(function(){
//   console.log("Ready")
// })

// console.log("Outside")

// Outside
// Ready

// Q.2
// $("#check").attr("checked")
// Returns initial HTML value.
// $("#check").prop("checked")
// Returns current checked state.

// Q.3
// $("#check").attr("checked", "checked")
// $("#check").prop("checked", true)
// Both will check the checkbox.

// Q.4
// $("#check").removeAttr("checked")
// $("#check").prop("checked", false)
// Both will uncheck the checkbox.

// Q.5
// $("#box").append("<p>Hi</p>")
// Adds inside existing content.

// $("#box").html("<p>Hi</p>")
// Replaces existing content with new content.

// Q.6
// which jquery method inserts content after the selectedd element
// .after()

// Q.7
// which jQuery method finds the nearest ancestor thath matches a selector
// .closest()

// Q.8
// which jQuery method removes the selected element from the DOM
// .remove()

// Q.9
// which jQuery method adds a class to the selected element
// .addClass()

// Q.10
// which jQuery method gets the value of an input field
// .val()

// Q.11
// which jQuery method sets the text content of an element
// .text()

// Q.12
// which jQuery method gets the width of an element
// .width()

// Q.13
// which jQuery method sets the CSS property of an element
// .css()

// Q.14
// which jQuery method gets the data attribute of an element
// .data()

// Q.15
// which jQuery method removes the parent wrapper of an element
// .unwrap()

// Q.16
// which jQuery method gets the position of an element relative to the document
// .offset()

// Q.17
// which jQuery method gets the current vertical position of the scroll bar
// .scrollTop()

// Q.18
// which jquery method clones an eement along with its attached events
// .clone(true)

// Q.19
// which jQuery method gets the current value of the first element in the set of matched elements
// .val()

// Q.20
// which jquery method removes only the child elements of a selected element
// .empty()

// Q.21
// which jQuery method gets the current computed height of the first element in the set of matched elements
// .height()

// Q.22
// which jquery method inserts content at the begining og a selected element
// .prepend()


// Q.23
//Which method removes an element but keeps its data and events?
// .detach()

// Q.24
// Which method removes an event handler?
// .off()

// Q.25
// ✅ mouseenter()

// Triggered when mouse enters element (does NOT bubble).

// ✅ mouseleave()

// Triggered when mouse leaves element (does NOT bubble).

// ✅ mouseover()

// Triggered when mouse enters element (bubbles).

// ✅ mouseout()

// Triggered when mouse leaves element (bubbles).

// ✅ mousemove()

// Triggered when mouse moves inside element.

// ✅ mousedown()

// Triggered when mouse button is pressed down.

// ✅ mouseup()

// Triggered when mouse button is released.

// 🔥 2️⃣ Keyboard Events

// Triggered when keyboard keys are used.

// ✅ keydown()

// Triggered when key is pressed down.

// ✅ keyup()

// Triggered when key is released.

// ✅ keypress()

// Triggered when key produces a character (deprecated in modern JS).

// 🔥 3️⃣ Form Events

// Used with form elements.

// ✅ submit()

// Triggered when form is submitted.

// ✅ change()

// Triggered when input value changes and loses focus.

// ✅ focus()

// Triggered when element gains focus.

// ✅ blur()

// Triggered when element loses focus.

// ✅ focusin()

// Like focus() but bubbles.

// ✅ focusout()

// Like blur() but bubbles.

// ✅ select()

// Triggered when text inside input/textarea is selected.

// // 🔥 2️⃣ Insert Methods
// ✅ .append()

// Insert content inside element at end.

// ✅ .appendTo()

// Same as append but reversed syntax.

// ✅ .prepend()

// Insert content inside element at beginning.

// ✅ .prependTo()

// Same as prepend but reversed syntax.

// ✅ .after()

// Insert content after selected element.

// ✅ .before()

// Insert content before selected element.

// ✅ .insertAfter()

// Reverse syntax of .after().

// ✅ .insertBefore()

// Reverse syntax of .before().

// 🔥 3️⃣ Remove Methods
// ✅ .remove()

// Removes selected element completely.

// ✅ .empty()

// Removes only child elements.

// ✅ .detach()

// Removes element but keeps events/data.

// ✅ .unwrap()

// Removes parent wrapper.

// 🔥 4️⃣ Replace Methods
// ✅ .replaceWith()

// Replace selected element.

// ✅ .replaceAll()

// Reverse syntax of replaceWith.

// 🔥 5️⃣ Clone
// ✅ .clone()

// Clones element.

// .clone(true)

// Clones element + events.

// 🔥 6️⃣ CSS & Class Methods
// ✅ .css()

// Gets or sets CSS property.

// ✅ .addClass()

// Adds CSS class.

// ✅ .removeClass()

// Removes CSS class.

// ✅ .toggleClass()

// Adds/removes class automatically.

// ✅ .hasClass()

// Checks if class exists.

// 🔥 7️⃣ Attribute & Property
// ✅ .attr()

// Gets/sets HTML attribute.

// ✅ .removeAttr()

// Removes attribute.

// ✅ .prop()

// Gets/sets property (dynamic state like checked).

// ✅ .removeProp()

// Removes property.

// 🔥 8️⃣ Traversing Methods
// 🔹 Upward
// .parent()

// Immediate parent.

// .parents()

// All ancestors.

// .parentsUntil()

// Ancestors until selector.

// .closest()

// Nearest matching ancestor.

// 🔹 Downward
// .children()

// Immediate children.

// .find()

// Finds all matching descendants.

// 🔹 Sideways
// .siblings()

// All siblings.

// .next()

// Next sibling.

// .nextAll()

// All next siblings.

// .prev()

// Previous sibling.

// .prevAll()

// All previous siblings.

// 🔹 Filtering
// .first()

// First element.

// .last()

// Last element.

// .eq()

// Element at index.

// .filter()

// Filter by condition.

// .not()

// Exclude elements.

// .has()

// Elements that contain selector.

// 🔥 9️⃣ Event Methods
// .on()

// Attach event.

// .off()

// Remove event.

// .one()

// Runs once.

// .trigger()

// Manually trigger event.

// .hover()

// Mouse enter + leave shortcut.

// 🔥 🔟 Effects / Animation
// .hide()

// Hides element.

// .show()

// Shows element.

// .toggle()

// Toggle show/hide.

// .fadeIn()

// Fade in effect.

// .fadeOut()

// Fade out effect.

// .fadeToggle()

// Toggle fade.

// .slideDown()

// Slide open.

// .slideUp()

// Slide close.

// .slideToggle()

// Toggle slide.

// .animate()

// Custom animation.

// .stop()

// Stop animation.

// .delay()

// Delay animation.

// 🔥 1️⃣1️⃣ AJAX Methods
// $.ajax()

// Main AJAX method.

// $.get()

// GET request.

// $.post()

// POST request.

// $.getJSON()

// GET JSON data.

// .load()

// Loads HTML from server into element.

// 🔥 1️⃣2️⃣ Utility Methods
// $.each()

// Loop through elements.

// $.map()

// Transform array.

// $.grep()

// Filter array.

// $.trim()

// Remove whitespace.

// $.type()

// Check data type.

// $.inArray()

// Check if value exists in array.

// $.extend()

// Merge objects.

// 🔥 1️⃣3️⃣ Dimensions
// .width()

// Gets/sets width.

// .height()

// Gets/sets height.

// .innerWidth()

// Width + padding.

// .outerWidth()

// Width + padding + border.

// 🔥 1️⃣4️⃣ Position
// .offset()

// Position relative to document.

// .position()

// Position relative to parent.

// .scrollTop()

// Get/set vertical scroll.

// .scrollLeft()

// Get/set horizontal scroll.

