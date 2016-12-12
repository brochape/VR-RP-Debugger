

modify:
	node before.js

post:
	node zombieBrowser.js

all: modify post
