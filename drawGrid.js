function drawGrid(ctx) {
    // Draw V lines
    
    ctx.beginPath();
    ctx.strokeStyle="#FF0000";
    for(i=0;i<1800;i=i+36)
    {ctx.moveTo(i,0);
     ctx.lineTo(i,800);
    }
    
    for(i=0;i<800; i=i+40)
    {ctx.moveTo(0,i);
     ctx.lineTo(1800,i);
    }
    ctx.stroke();
    
    ctx.beginPath();
    ctx.lineWidth= 3;
    for(i=-1;i<=800; i=i+200)
    {
    ctx.moveTo(0,i);
    ctx.lineTo(1800,i);
    }
    for(i=-1;i<=1800; i=i+360)
    {
    ctx.moveTo(i,0);
    ctx.lineTo(i,800);
    }
    
    ctx.stroke();
    }

