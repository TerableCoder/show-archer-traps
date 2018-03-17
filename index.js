 module.exports = function ShowArcherTraps(dispatch) {
     
    let Traps = {
        67259564: 67259584,//fire
        67199564: 67199584,//slow
        67209264: 67209284,//stun
        67339064: 67339084,//r-stun
        67359864: 67359884 //r-fire
    };
    
    let gameId = -1,
    projectile = null;

    dispatch.hook('S_LOGIN', 9, event => {
        gameId = event.gameId
    })
    
    dispatch.hook('S_SPAWN_PROJECTILE', 3, (event) => {
        projectile = event;
    });
    
     dispatch.hook('S_ACTION_END', 3, (event) => {
        if (event.gameId - gameId == 0) return;
        
        if (Traps[event.skill])
        {
            setTimeout(() => {
                dispatch.toClient('S_DESPAWN_PROJECTILE', 2, { id: projectile.id })
                dispatch.toClient('S_SPAWN_PROJECTILE', 3, Object.assign({}, projectile, {
                    id: projectile.id,
                    gameId: gameId
                }))
                
                setTimeout(() => {
                    dispatch.toClient('S_DESPAWN_PROJECTILE', 2, { id: projectile.id })
                }, 20000);
            }, 100);
        }
     });
    
 }
