"use strict";var window=self,Jocly;onmessage=function(e){var a=Date.now(),o=e.data,t=o.options;switch(o.type){case"Init":var n=[o.baseURL+"jocly.core.js"];Jocly=self.exports={},importScripts.apply(null,n),Date.now()-a;break;case"Play":Jocly.createInternalGame(o.gameName,t).then(function(a){switch(a.mBoard.mMoves=[],a.Load({playedMoves:o.playedMoves}),a.mDoneCallback=function(e){postMessage({type:"Done",data:e})},a.mProgressCallback=function(e){postMessage({type:"Progress",percent:e})},void 0!==t.level&&(a.mTopLevel=t.level),void 0!==t.maxDepth&&(a.mTopLevel=t.maxDepth),a.mStartTime=(new Date).getTime(),a.mExploredCount=0,a.mPickedMoveIndex=0,a.mBestMoves=[],a.mContexts=[],a.mDuration=0,a.mAborted=!1,a.mRandomSeed=0,t.randomSeed&&!isNaN(parseInt(t.randomSeed))&&(a.mRandomSeed=parseInt(t.randomSeed)),a.mOptions.levelOptions&&(a.mOptions.levelOptionsSaved=JSON.parse(JSON.stringify(a.mOptions.levelOptions)),t.level&&JocUtil.extend(a.mOptions.levelOptions,t.level)),e.data.algo){case"uct":JoclyUCT.startMachine(a,t);break;case"alpha-beta":a.Engine(a.mBoard,a.mTopLevel,!1,0,t.potential),a.Run()}})}};