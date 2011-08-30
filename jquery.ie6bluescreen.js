/*!
 * jQuery IE6Bluescreen v0.1
 * https://github.com/DevDavido/IE6Bluescreen
 *
 * Copyright 2011, DevDavido
 * Licensed under the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 */

(function($) {
    $.ie6bluescreen = function() {
        // Check if the browser is IE6
        if ($.browser.msie && $.browser.version == '6.0') {
        
            // Get width and height of the browser window
            var windowWidth = $(window).width();
            var windowHeight = $(window).height();
            
            // Create CSS styles
            var styles = {
                bluescreenWrapper: {
                    font: 'normal 14px/18px Courier New, sans-serif',
                    backgroundColor: '#000080',
                    color: '#ffffff',
                    margin: '0px',
                    padding: '0px',
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    zIndex: '99999',
                    width: windowWidth,
                    height: windowHeight
                },
                bluescreen: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    height: '150px',
                    width: '600px',
                    marginLeft: '-300px',
                    marginTop: '-75px'
                },
                bluescreenHeading: {
                    backgroundColor: '#acacac',
                    textAlign: 'center',
                    display: 'inline',
                    marginLeft: '254px',
                    position: 'relative',
                    bottom: '10px',
                    padding: '2px 6px',
                    color: '#000080',
                    font: 'normal 14px/18px Courier New, sans-serif'
                },
                bluescreenParagraph: {
                    margin: '0px'
                },
                bluescreenLastParagraph: {
                    textAlign: 'center',
                    marginTop: '20px'
                },
                bluescreenLink: {
                    color: '#ffffff'
                }
            }
            
            /*!
             * Creates a cookie with the value parameter for one day
             */
            function createCookie(name, value) {
                var date = new Date();
                date.setTime(date.getTime() + 86400000);
                document.cookie = name + '=' + value + '; expires=' + date.toGMTString() + '; path=/';
            }
            
            /*!
             * Reads a cookie with the parameter name
             */
            function readCookie(name) {
                var name = name + '=';
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var c = cookies[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1, c.length);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return null;
            }
            
            
            // If cookie isn't set show bluescreen
            if (readCookie('ie6bluescreen') != '1') {
                // Setup the html
                $('body').append('<div id="bluescreenWrapper"> \
                                      <div id="bluescreen"> \
                                          <h1>Windows</h1> \
                                          <p>A totally outdated browser software (Internet Explorer 6) was detected.</p> \
                                          <p>This browser is older than a whole decade and even its creator, Microsoft,</p> \
                                          <p>says to move off IE6 and say goodbye to this dinosaur.</p> \
                                          <p>So please <a href="http://www.ie6countdown.com/" title="Microsofts upgrade page">upgrade your browser</a> \
                                             or install <a href="http://www.google.com/chromeframe" title="Googles Chrome Frame">Chrome Frame</a> into your IE.</p> \
                                          <p>Press any key to continue <blink>_</blink></p> \
                                      </div> \
                                </div>');
                // Set CSS styles
                $('#bluescreenWrapper').css(styles.bluescreenWrapper);
                $('#bluescreen').css(styles.bluescreen);
                $('#bluescreen h1').css(styles.bluescreenHeading);
                $('#bluescreen p').css(styles.bluescreenParagraph);
                $('#bluescreen p:last').css(styles.bluescreenLastParagraph);
                $('#bluescreen a').css(styles.bluescreenLink);
                // Reproduce the oldschool <blink> behaviour for IE6
                $('#bluescreen blink').each(function() {
                    var element = $(this);
                    setInterval(function() {
                        if ($(element).css('visibility') == 'visible') { // is(':visible') seems to to work here :(
                            $(element).css('visibility', 'hidden');
                        } else {
                            $(element).css('visibility', 'visible');
                        }
                    }, 500);
                });
            
                // If any key is pressed fade out and remove the bluescreen
                $(document).bind('keypress', function() {
                    $('#bluescreenWrapper').fadeOut('slow', function() {
                        // Calculate the expire date for the cookie and set cookie
                        createCookie('ie6bluescreen', '1');
                        // Remove bluescreen wrapper
                        $('#bluescreenWrapper').remove();
                    });
                });
            }
        }
    };
})(jQuery);

// Run IE6Bluescreen function when document is ready
$(document).ready(function() {
    $.ie6bluescreen();
});