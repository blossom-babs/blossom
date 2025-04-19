focus-within is one of those css hidden treasures, moreso for me than everyone else because it's always been around and widely supported (except of course on IE - but you need not worry, it's no longer supported)

Use-case

You are tasked with building a simple input field, and when this input field is in focus, you want to display a dropdown of possible queries.

If you say you'll use state, you are absolutely right and it would be an overkill but a solutin nontheless.

if you choose focus-within, I completely believe that you came up with this on your own because I did not give any hint.

I will be going with focus-within in this case because it is elegant and built like this.

Also when building single page applications, it is easy to fall into the trap of use javascript for every single thing but if it can be handled natively by the web, do this (I write more on this here: )


Extra source:
https://css-tricks.com/almanac/pseudo-selectors/f/focus-within/