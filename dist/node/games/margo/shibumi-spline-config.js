exports.config = {"status":true,"model":{"title-en":"Spline","module":"margo","js":["spbase-model.js","spline-model.js"],"summary":"Shibumi game","thumbnail":"tn-shibumi-spline.png","strings":[],"rules":{"en":"rules-spline.html","fr":"rules-spline.html"},"description":{"en":"description-spline.html","fr":"description-spline.html"},"credits":{"en":"credits-spline.html","fr":"credits-spline.html"},"demoRandom":true,"gameOptions":{"preventRepeat":true,"uctTransposition":"states","uctIgnoreLoop":true,"size":4},"plazza":"true","levels":[{"label":"Beginner","potential":1000,"isDefault":true,"maxDepth":1},{"label":"Easy","potential":2000,"maxDepth":5},{"label":"Medium","potential":6000,"maxDepth":6},{"label":"Confirmed","potential":10000,"maxDepth":8}]},"view":{"title-en":"Margo View","module":"margo","js":["spbase-xd-view.js","spline-view.js"],"xdView":true,"css":["spbase.css"],"preferredRatio":1,"useNotation":true,"defaultOptions":{"sounds":true,"moves":true,"notation":false},"skins":[{"name":"classic3d","title":"3D Classic","3d":true,"camera":{"radius":20,"elevationAngle":45,"limitCamMoves":true,"distMax":40,"distMin":10,"elevationMin":-45,"elevationMax":89.9,"enableDrag":false},"world":{"lightIntensity":0,"color":0,"fog":false,"skyLightIntensity":0.7,"skyLightPosition":{"x":0,"y":10,"z":0},"ambientLightColor":8947848},"preload":["image|/res/xd-view/meshes/grey.png","image|/res/xd-view/meshes/black.png","image|/res/xd-view/meshes/white.png","image|/res/xd-view/meshes/green.png","image|/res/xd-view/meshes/skybox/nx.jpg","image|/res/xd-view/meshes/skybox/ny.jpg","image|/res/xd-view/meshes/skybox/nz.jpg","image|/res/xd-view/meshes/skybox/px.jpg","image|/res/xd-view/meshes/skybox/py.jpg","image|/res/xd-view/meshes/skybox/pz.jpg"]},{"name":"wood","title":"Wood","preload":["image|/res/images/ball_black.png","image|/res/images/ball_white.png","image|/res/images/ball_green.png","image|/res/images/plot.png","image|/res/images/wood.png"]},{"name":"classical","title":"Classic","preload":["image|/res/images/ball_black.png","image|/res/images/ball_white.png","image|/res/images/ball_green.png","image|/res/images/plot.png"]}],"animateSelfMoves":false,"visuals":{"600x600":["res/visuals/spline-600x600-3d.jpg","res/visuals/spline-600x600-2d.jpg"]}}}