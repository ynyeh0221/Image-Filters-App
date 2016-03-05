    function changeclass()
    {
        document.getElementById("imageLoader").className="button3";
        document.getElementById("btns").className="hint2";
    }

    function myFunction2()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        ctx.translate(img.width, img.height);
        ctx.rotate(Math.PI);
        ctx.drawImage(img, ulx,uly, img.width, img.height);
    }
    function myFunction3()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        ctx.translate(img.width, 0);
        ctx.scale(-1, 1);
        ctx.drawImage(img, ulx,uly, img.width, img.height);
    }
    function myFunction5()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var xs=document.getElementById("myText1").value;
        var ys=document.getElementById("myText2").value;
        ctx.clearRect(ulx, uly, canvas.width, canvas.height);
        ctx.scale(xs, ys);
        ctx.drawImage(img, ulx,uly, img.width, img.height);
    }

    function myFunction7()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var data=imageData.data;
        for(i=0;i<data.length;i+=4)
        {
          data[i]=255-data[i];
          data[i+1]=255-data[i+1];
          data[i+2]=255-data[i+2];
        }
        ctx.putImageData(imageData,0,0);
    }
    function myFunction8()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var data=imageData.data;
        for(i=0;i<data.length;i+=4)
        {
          gray=parseInt(0.299*data[i]+0.587*data[i+1]+0.714*data[i+2]);
          data[i]=gray;
          data[i+1]=gray;
          data[i+2]=gray;
        }
        ctx.putImageData(imageData,0,0);
    }
    function myFunction31()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var data=imageData.data;
        for(i=0;i<data.length;i+=4)
        {
          gray=parseInt(0.299*data[i]+0.587*data[i+1]+0.714*data[i+2]);
          data[i]=gray+65;
          data[i+1]=gray+30;
          data[i+2]=gray-25;
        }
        ctx.putImageData(imageData,0,0);
    }
    function myFunction9()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var data=imageData.data;
        for(i=0;i<data.length;i+=4)
          data[i + 3]=128;
        ctx.putImageData(imageData,0,0);
    }
    function myFunction10()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var data=imageData.data;
        for(i=0;i<data.length;i+=4)
        {
          data[i+1]=0;
          data[i+2]=0;
        }
        ctx.putImageData(imageData,0,0);
    }
    function myFunction11()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var data=imageData.data;
        for(i=0;i<data.length;i+=4)
        {
          data[i]=0;
          data[i+1]=0;
        }
        ctx.putImageData(imageData,0,0);
    }
    function myFunction12()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var data=imageData.data;
        for(i=0;i<data.length;i+=4)
        {
          data[i]=0;
          data[i+2]=0;
        }
        ctx.putImageData(imageData,0,0);
    }
    function myFunction13()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        ctx.clearRect(0, 0, canvas.width, canvas.height);  
    }
    function myFunction14()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var data=imageData.data;
        var adjustment=20;
        for(i=0;i<data.length;i+=4)
        {
          data[i] += adjustment;
          data[i+1] += adjustment;
          data[i+2] += adjustment;
        }
        ctx.putImageData(imageData,0,0);
    }
    function myFunction15()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var data=imageData.data;
        var threshold=150;
        for(i=0;i<data.length;i+=4)
        {
          var r = data[i];
          var g = data[i+1];
          var b = data[i+2];
          var v = (0.2126*r + 0.7152*g + 0.0722*b >= threshold) ? 255 : 0;
    data[i] = data[i+1] = data[i+2] = v
        }
        ctx.putImageData(imageData,0,0);
    }
    function myFunction16()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var weights=[0, -1/3,  0, -1/3,  7/3, -1/3, 0, -1/3,  0];
        var op=0.5;
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var side=Math.round(Math.sqrt(weights.length));
        var halfSide=Math.floor(side/2);
        var src=imageData.data;
        var sw=img.width;
        var sh=img.height;
        var w=sw;
        var h=sh;
        var output=ctx.createImageData(w,h);
        var dst=output.data;
        var alphaFac=op?1:0;
        for(y=0;y<h;y++)
        {
            for(x=0;x<w;x++)
            {
                var sy=y;
                var sx=x;
                var dstOff=(y*w+x)*4;
                var r=0, g=0, b=0, a=0;
                for(cy=0;cy<side;cy++)
                {
                    for(cx=0;cx<side;cx++)
                    {
                        var scy=sy+cy-halfSide;
                        var scx=sx+cx-halfSide;
                        if(scy>=0 && scy<sh && scx>=0 && scx<sw)
                        {
                            var srcOff=(scy*sw+scx)*4;
                            var wt=weights[cy*side+cx];
                            r+=src[srcOff]*wt;
                            g+=src[srcOff+1]*wt;
                            b+=src[srcOff+2]*wt;
                            a+=src[srcOff+3]*wt;
                        }
                    }
                }
                dst[dstOff]=r;
                dst[dstOff+1]=g;
                dst[dstOff+2]=b;
                dst[dstOff+3]=a+alphaFac*(255-a);
            }
        }
        ctx.putImageData(output,0,0);
    }
    function myFunction17()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var weights=[1/9, 1/9, 1/9, 1/9, 1/9, 1/9, 1/9, 1/9, 1/9 ];
        var op=0.5;
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var side=Math.round(Math.sqrt(weights.length));
        var halfSide=Math.floor(side/2);
        var src=imageData.data;
        var sw=img.width;
        var sh=img.height;
        var w=sw;
        var h=sh;
        var output=ctx.createImageData(w,h);
        var dst=output.data;
        var alphaFac=op?1:0;
        for(y=0;y<h;y++)
        {
            for(x=0;x<w;x++)
            {
                var sy=y;
                var sx=x;
                var dstOff=(y*w+x)*4;
                var r=0, g=0, b=0, a=0;
                for(cy=0;cy<side;cy++)
                {
                    for(cx=0;cx<side;cx++)
                    {
                        var scy=sy+cy-halfSide;
                        var scx=sx+cx-halfSide;
                        if(scy>=0 && scy<sh && scx>=0 && scx<sw)
                        {
                            var srcOff=(scy*sw+scx)*4;
                            var wt=weights[cy*side+cx];
                            r+=src[srcOff]*wt;
                            g+=src[srcOff+1]*wt;
                            b+=src[srcOff+2]*wt;
                            a+=src[srcOff+3]*wt;
                        }
                    }
                }
                dst[dstOff]=r;
                dst[dstOff+1]=g;
                dst[dstOff+2]=b;
                dst[dstOff+3]=a+alphaFac*(255-a);
            }
        }
        ctx.putImageData(output,0,0);
    }
    function myFunction18()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var weights=[1, 1, 1, 1, 0.7, -1, -1, -1, -1];
        var op=0.5;
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var side=Math.round(Math.sqrt(weights.length));
        var halfSide=Math.floor(side/2);
        var src=imageData.data;
        var sw=img.width;
        var sh=img.height;
        var w=sw;
        var h=sh;
        var output=ctx.createImageData(w,h);
        var dst=output.data;
        var alphaFac=op?1:0;
        for(y=0;y<h;y++)
        {
            for(x=0;x<w;x++)
            {
                var sy=y;
                var sx=x;
                var dstOff=(y*w+x)*4;
                var r=0, g=0, b=0, a=0;
                for(cy=0;cy<side;cy++)
                {
                    for(cx=0;cx<side;cx++)
                    {
                        var scy=sy+cy-halfSide;
                        var scx=sx+cx-halfSide;
                        if(scy>=0 && scy<sh && scx>=0 && scx<sw)
                        {
                            var srcOff=(scy*sw+scx)*4;
                            var wt=weights[cy*side+cx];
                            r+=src[srcOff]*wt;
                            g+=src[srcOff+1]*wt;
                            b+=src[srcOff+2]*wt;
                            a+=src[srcOff+3]*wt;
                        }
                    }
                }
                dst[dstOff]=r;
                dst[dstOff+1]=g;
                dst[dstOff+2]=b;
                dst[dstOff+3]=a+alphaFac*(255-a);
            }
        }
        ctx.putImageData(output,0,0);
    }
    function myFunction19()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var rwgt=0.3086, gwgt=0.6094, bwgt=0.0820;
        var weights=[rwgt,rwgt,rwgt,0,gwgt,gwgt,gwgt,0,bwgt,bwgt,bwgt,0,0,0,0,1];
        var op=0.5;
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var side=Math.round(Math.sqrt(weights.length));
        var halfSide=Math.floor(side/2);
        var src=imageData.data;
        var sw=img.width;
        var sh=img.height;
        var w=sw;
        var h=sh;
        var output=ctx.createImageData(w,h);
        var dst=output.data;
        var alphaFac=op?1:0;
        for(y=0;y<h;y++)
        {
            for(x=0;x<w;x++)
            {
                var sy=y;
                var sx=x;
                var dstOff=(y*w+x)*4;
                var r=0, g=0, b=0, a=0;
                for(cy=0;cy<side;cy++)
                {
                    for(cx=0;cx<side;cx++)
                    {
                        var scy=sy+cy-halfSide;
                        var scx=sx+cx-halfSide;
                        if(scy>=0 && scy<sh && scx>=0 && scx<sw)
                        {
                            var srcOff=(scy*sw+scx)*4;
                            var wt=weights[cy*side+cx];
                            r+=src[srcOff]*wt;
                            g+=src[srcOff+1]*wt;
                            b+=src[srcOff+2]*wt;
                            a+=src[srcOff+3]*wt;
                        }
                    }
                }
                dst[dstOff]=r;
                dst[dstOff+1]=g;
                dst[dstOff+2]=b;
                dst[dstOff+3]=a+alphaFac*(255-a);
            }
        }
        ctx.putImageData(output,0,0);
    }
    function myFunction20()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var weights=[0, 0, 0, 0, 6/9, 0, 0, 0, 0];
        var op=0.5;
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var side=Math.round(Math.sqrt(weights.length));
        var halfSide=Math.floor(side/2);
        var src=imageData.data;
        var sw=img.width;
        var sh=img.height;
        var w=sw;
        var h=sh;
        var output=ctx.createImageData(w,h);
        var dst=output.data;
        var alphaFac=op?1:0;
        for(y=0;y<h;y++)
        {
            for(x=0;x<w;x++)
            {
                var sy=y;
                var sx=x;
                var dstOff=(y*w+x)*4;
                var r=0, g=0, b=0, a=0;
                for(cy=0;cy<side;cy++)
                {
                    for(cx=0;cx<side;cx++)
                    {
                        var scy=sy+cy-halfSide;
                        var scx=sx+cx-halfSide;
                        if(scy>=0 && scy<sh && scx>=0 && scx<sw)
                        {
                            var srcOff=(scy*sw+scx)*4;
                            var wt=weights[cy*side+cx];
                            r+=src[srcOff]*wt;
                            g+=src[srcOff+1]*wt;
                            b+=src[srcOff+2]*wt;
                            a+=src[srcOff+3]*wt;
                        }
                    }
                }
                dst[dstOff]=r;
                dst[dstOff+1]=g;
                dst[dstOff+2]=b;
                dst[dstOff+3]=a+alphaFac*(255-a);
            }
        }
        ctx.putImageData(output,0,0);
    }
    function myFunction21()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var weights=[0, 1, 0, 1, -4, 1, 0, 1, 0];
        var op=1;
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var side=Math.round(Math.sqrt(weights.length));
        var halfSide=Math.floor(side/2);
        var src=imageData.data;
        var sw=img.width;
        var sh=img.height;
        var w=sw;
        var h=sh;
        var output=ctx.createImageData(w,h);
        var dst=output.data;
        var alphaFac=op?1:0;
        for(y=0;y<h;y++)
        {
            for(x=0;x<w;x++)
            {
                var sy=y;
                var sx=x;
                var dstOff=(y*w+x)*4;
                var r=0, g=0, b=0, a=0;
                for(cy=0;cy<side;cy++)
                {
                    for(cx=0;cx<side;cx++)
                    {
                        var scy=sy+cy-halfSide;
                        var scx=sx+cx-halfSide;
                        if(scy>=0 && scy<sh && scx>=0 && scx<sw)
                        {
                            var srcOff=(scy*sw+scx)*4;
                            var wt=weights[cy*side+cx];
                            r+=src[srcOff]*wt;
                            g+=src[srcOff+1]*wt;
                            b+=src[srcOff+2]*wt;
                            a+=src[srcOff+3]*wt;
                        }
                    }
                }
                dst[dstOff]=r;
                dst[dstOff+1]=g;
                dst[dstOff+2]=b;
                dst[dstOff+3]=a+alphaFac*(255-a);
            }
        }
        ctx.putImageData(output,0,0);
    }
    function myFunction22()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var weights=[-2, -1, 0, -1, 1, 1, 0, 1, 2];
        var op=1;
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var side=Math.round(Math.sqrt(weights.length));
        var halfSide=Math.floor(side/2);
        var src=imageData.data;
        var sw=img.width;
        var sh=img.height;
        var w=sw;
        var h=sh;
        var output=ctx.createImageData(w,h);
        var dst=output.data;
        var alphaFac=op?1:0;
        for(y=0;y<h;y++)
        {
            for(x=0;x<w;x++)
            {
                var sy=y;
                var sx=x;
                var dstOff=(y*w+x)*4;
                var r=0, g=0, b=0, a=0;
                for(cy=0;cy<side;cy++)
                {
                    for(cx=0;cx<side;cx++)
                    {
                        var scy=sy+cy-halfSide;
                        var scx=sx+cx-halfSide;
                        if(scy>=0 && scy<sh && scx>=0 && scx<sw)
                        {
                            var srcOff=(scy*sw+scx)*4;
                            var wt=weights[cy*side+cx];
                            r+=src[srcOff]*wt;
                            g+=src[srcOff+1]*wt;
                            b+=src[srcOff+2]*wt;
                            a+=src[srcOff+3]*wt;
                        }
                    }
                }
                dst[dstOff]=r;
                dst[dstOff+1]=g;
                dst[dstOff+2]=b;
                dst[dstOff+3]=a+alphaFac*(255-a);
            }
        }
        ctx.putImageData(output,0,0);
    }
    function myFunction23()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var weights=[1/16, 2/16, 1/16, 2/16, 4/16, 2/16, 1/16, 2/16, 1/16];
        var op=1;
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var side=Math.round(Math.sqrt(weights.length));
        var halfSide=Math.floor(side/2);
        var src=imageData.data;
        var sw=img.width;
        var sh=img.height;
        var w=sw;
        var h=sh;
        var output=ctx.createImageData(w,h);
        var dst=output.data;
        var alphaFac=op?1:0;
        for(y=0;y<h;y++)
        {
            for(x=0;x<w;x++)
            {
                var sy=y;
                var sx=x;
                var dstOff=(y*w+x)*4;
                var r=0, g=0, b=0, a=0;
                for(cy=0;cy<side;cy++)
                {
                    for(cx=0;cx<side;cx++)
                    {
                        var scy=sy+cy-halfSide;
                        var scx=sx+cx-halfSide;
                        if(scy>=0 && scy<sh && scx>=0 && scx<sw)
                        {
                            var srcOff=(scy*sw+scx)*4;
                            var wt=weights[cy*side+cx];
                            r+=src[srcOff]*wt;
                            g+=src[srcOff+1]*wt;
                            b+=src[srcOff+2]*wt;
                            a+=src[srcOff+3]*wt;
                        }
                    }
                }
                dst[dstOff]=r;
                dst[dstOff+1]=g;
                dst[dstOff+2]=b;
                dst[dstOff+3]=a+alphaFac*(255-a);
            }
        }
        ctx.putImageData(output,0,0);
    }
    function myFunction24()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var weights=[1/9, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1/9, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 1/9, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 1/9, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1/9, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1/9, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 1/9, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1/9, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 1/9];
        var op=1;
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var side=Math.round(Math.sqrt(weights.length));
        var halfSide=Math.floor(side/2);
        var src=imageData.data;
        var sw=img.width;
        var sh=img.height;
        var w=sw;
        var h=sh;
        var output=ctx.createImageData(w,h);
        var dst=output.data;
        var alphaFac=op?1:0;
        for(y=0;y<h;y++)
        {
            for(x=0;x<w;x++)
            {
                var sy=y;
                var sx=x;
                var dstOff=(y*w+x)*4;
                var r=0, g=0, b=0, a=0;
                for(cy=0;cy<side;cy++)
                {
                    for(cx=0;cx<side;cx++)
                    {
                        var scy=sy+cy-halfSide;
                        var scx=sx+cx-halfSide;
                        if(scy>=0 && scy<sh && scx>=0 && scx<sw)
                        {
                            var srcOff=(scy*sw+scx)*4;
                            var wt=weights[cy*side+cx];
                            r+=src[srcOff]*wt;
                            g+=src[srcOff+1]*wt;
                            b+=src[srcOff+2]*wt;
                            a+=src[srcOff+3]*wt;
                        }
                    }
                }
                dst[dstOff]=r;
                dst[dstOff+1]=g;
                dst[dstOff+2]=b;
                dst[dstOff+3]=a+alphaFac*(255-a);
            }
        }
        ctx.putImageData(output,0,0);
    }
    function myFunction25()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var weights=[1, 1, 1,1, -7, 1,1,  1,  1];
        var op=1;
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var side=Math.round(Math.sqrt(weights.length));
        var halfSide=Math.floor(side/2);
        var src=imageData.data;
        var sw=img.width;
        var sh=img.height;
        var w=sw;
        var h=sh;
        var output=ctx.createImageData(w,h);
        var dst=output.data;
        var alphaFac=op?1:0;
        for(y=0;y<h;y++)
        {
            for(x=0;x<w;x++)
            {
                var sy=y;
                var sx=x;
                var dstOff=(y*w+x)*4;
                var r=0, g=0, b=0, a=0;
                for(cy=0;cy<side;cy++)
                {
                    for(cx=0;cx<side;cx++)
                    {
                        var scy=sy+cy-halfSide;
                        var scx=sx+cx-halfSide;
                        if(scy>=0 && scy<sh && scx>=0 && scx<sw)
                        {
                            var srcOff=(scy*sw+scx)*4;
                            var wt=weights[cy*side+cx];
                            r+=src[srcOff]*wt;
                            g+=src[srcOff+1]*wt;
                            b+=src[srcOff+2]*wt;
                            a+=src[srcOff+3]*wt;
                        }
                    }
                }
                dst[dstOff]=r;
                dst[dstOff+1]=g;
                dst[dstOff+2]=b;
                dst[dstOff+3]=a+alphaFac*(255-a);
            }
        }
        ctx.putImageData(output,0,0);
    }
    function myFunction26()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var weights=[-1, -1, -1, -1,  8, -1,-1, -1, -1];
        var op=1;
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var side=Math.round(Math.sqrt(weights.length));
        var halfSide=Math.floor(side/2);
        var src=imageData.data;
        var sw=img.width;
        var sh=img.height;
        var w=sw;
        var h=sh;
        var output=ctx.createImageData(w,h);
        var dst=output.data;
        var alphaFac=op?1:0;
        for(y=0;y<h;y++)
        {
            for(x=0;x<w;x++)
            {
                var sy=y;
                var sx=x;
                var dstOff=(y*w+x)*4;
                var r=0, g=0, b=0, a=0;
                for(cy=0;cy<side;cy++)
                {
                    for(cx=0;cx<side;cx++)
                    {
                        var scy=sy+cy-halfSide;
                        var scx=sx+cx-halfSide;
                        if(scy>=0 && scy<sh && scx>=0 && scx<sw)
                        {
                            var srcOff=(scy*sw+scx)*4;
                            var wt=weights[cy*side+cx];
                            r+=src[srcOff]*wt;
                            g+=src[srcOff+1]*wt;
                            b+=src[srcOff+2]*wt;
                            a+=src[srcOff+3]*wt;
                        }
                    }
                }
                dst[dstOff]=255-r;
                dst[dstOff+1]=255-g;
                dst[dstOff+2]=255-b;
                dst[dstOff+3]=a+alphaFac*(255-a);
            }
        }
        ctx.putImageData(output,0,0);
    }
    function myFunction27()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var weights=[0, -1/6,  0, -1/6, 10/6, -1/6, 0, -1/6,  0];
        var op=1;
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var side=Math.round(Math.sqrt(weights.length));
        var halfSide=Math.floor(side/2);
        var src=imageData.data;
        var sw=img.width;
        var sh=img.height;
        var w=sw;
        var h=sh;
        var output=ctx.createImageData(w,h);
        var dst=output.data;
        var alphaFac=op?1:0;
        for(y=0;y<h;y++)
        {
            for(x=0;x<w;x++)
            {
                var sy=y;
                var sx=x;
                var dstOff=(y*w+x)*4;
                var r=0, g=0, b=0, a=0;
                for(cy=0;cy<side;cy++)
                {
                    for(cx=0;cx<side;cx++)
                    {
                        var scy=sy+cy-halfSide;
                        var scx=sx+cx-halfSide;
                        if(scy>=0 && scy<sh && scx>=0 && scx<sw)
                        {
                            var srcOff=(scy*sw+scx)*4;
                            var wt=weights[cy*side+cx];
                            r+=src[srcOff]*wt;
                            g+=src[srcOff+1]*wt;
                            b+=src[srcOff+2]*wt;
                            a+=src[srcOff+3]*wt;
                        }
                    }
                }
                dst[dstOff]=r;
                dst[dstOff+1]=g;
                dst[dstOff+2]=b;
                dst[dstOff+3]=a+alphaFac*(255-a);
            }
        }
        ctx.putImageData(output,0,0);
    }
    function myFunction28()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var weights=[1/13, 1/13, 1/13, 1/13, 5/13, 1/13, 1/13,  1/13, 1/13];
        var op=1;
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var side=Math.round(Math.sqrt(weights.length));
        var halfSide=Math.floor(side/2);
        var src=imageData.data;
        var sw=img.width;
        var sh=img.height;
        var w=sw;
        var h=sh;
        var output=ctx.createImageData(w,h);
        var dst=output.data;
        var alphaFac=op?1:0;
        for(y=0;y<h;y++)
        {
            for(x=0;x<w;x++)
            {
                var sy=y;
                var sx=x;
                var dstOff=(y*w+x)*4;
                var r=0, g=0, b=0, a=0;
                for(cy=0;cy<side;cy++)
                {
                    for(cx=0;cx<side;cx++)
                    {
                        var scy=sy+cy-halfSide;
                        var scx=sx+cx-halfSide;
                        if(scy>=0 && scy<sh && scx>=0 && scx<sw)
                        {
                            var srcOff=(scy*sw+scx)*4;
                            var wt=weights[cy*side+cx];
                            r+=src[srcOff]*wt;
                            g+=src[srcOff+1]*wt;
                            b+=src[srcOff+2]*wt;
                            a+=src[srcOff+3]*wt;
                        }
                    }
                }
                dst[dstOff]=r;
                dst[dstOff+1]=g;
                dst[dstOff+2]=b;
                dst[dstOff+3]=a+alphaFac*(255-a);
            }
        }
        ctx.putImageData(output,0,0);
    }
    function myFunction29()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var weights=[-1, 0, 1, -2, 0, 2, -1, 0 ,1];
        var weights1=[-1, -2, -1, 0, 0, 0, 1, 2, 1];
        var op=1;
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var side=Math.round(Math.sqrt(weights.length));
        var halfSide=Math.floor(side/2);
        var src=imageData.data;
        var sw=img.width;
        var sh=img.height;
        var w=sw;
        var h=sh;
        var output=ctx.createImageData(w,h);
        var dst=output.data;
        var alphaFac=op?1:0;
        for(y=0;y<h;y++)
        {
            for(x=0;x<w;x++)
            {
                var sy=y;
                var sx=x;
                var dstOff=(y*w+x)*4;
                var r=0, g=0, b=0, a=0;
                var r1=0, g1=0, b1=0, a1=0;
                for(cy=0;cy<side;cy++)
                {
                    for(cx=0;cx<side;cx++)
                    {
                        var scy=sy+cy-halfSide;
                        var scx=sx+cx-halfSide;
                        if(scy>=0 && scy<sh && scx>=0 && scx<sw)
                        {
                            var srcOff=(scy*sw+scx)*4;
                            var wt=weights[cy*side+cx];
                            var wt1=weights1[cy*side+cx];
                            r+=src[srcOff]*wt;
                            g+=src[srcOff+1]*wt;
                            b+=src[srcOff+2]*wt;
                            a+=src[srcOff+3]*wt; 
                            r1+=src[srcOff]*wt1;
                            g1+=src[srcOff+1]*wt1;
                            b1+=src[srcOff+3]*wt1;
                            a1+=src[srcOff+3]*wt1;
                        }
                    }
                }
                dst[dstOff]=Math.sqrt(r*r+r1*r1);
                dst[dstOff+1]=Math.sqrt(g*g+g1*g1);
                dst[dstOff+2]=Math.sqrt(b*b+b1*b1);
                dst[dstOff+3]=a+alphaFac*(255-a);
            }
        }
        ctx.putImageData(output,0,0);
    }
    function myFunction30()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var weights=[1, 1, 1, 1,1, 1, 1,  1, 1];
        var op=1;
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var side=Math.round(Math.sqrt(weights.length));
        var halfSide=Math.floor(side/2);
        var src=imageData.data;
        var sw=img.width;
        var sh=img.height;
        var w=sw;
        var h=sh;
        var output=ctx.createImageData(w,h);
        var dst=output.data;
        var alphaFac=op?1:0;
        for(y=0;y<h;y++)
        {
            for(x=0;x<w;x++)
            {
                var sy=y;
                var sx=x;
                var dstOff=(y*w+x)*4;
                var r=0, g=0, b=0, a=0;
                for(cy=0;cy<side;cy++)
                {
                    for(cx=0;cx<side;cx++)
                    {
                        var scy=sy+cy-halfSide;
                        var scx=sx+cx-halfSide;
                        if(scy>=0 && scy<sh && scx>=0 && scx<sw)
                        {
                            var srcOff=(scy*sw+scx)*4;
                            var wt=weights[cy*side+cx];
                            r+=src[srcOff]*wt;
                            g+=src[srcOff+1]*wt;
                            b+=src[srcOff+2]*wt;
                            a+=src[srcOff+3]*wt;
                        }
                    }
                }
                dst[dstOff]=r;
                dst[dstOff+1]=g;
                dst[dstOff+2]=b;
                dst[dstOff+3]=a+alphaFac*(255-a);
            }
        }
        ctx.putImageData(output,0,0);
    }
    function myFunction32()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var weights=[1, 1, 1, 1,1, 1, 1,  1, 1];
        var op=1;
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var side=Math.round(Math.sqrt(weights.length));
        var halfSide=Math.floor(side/2);
        var src=imageData.data;
        var sw=img.width;
        var sh=img.height;
        var w=sw;
        var h=sh;
        var output=ctx.createImageData(w,h);
        var dst=output.data;
        var alphaFac=op?1:0;
        for(y=0;y<h;y++)
        {
            for(x=0;x<w;x++)
            {
                var sy=y;
                var sx=x;
                var dstOff=(y*w+x)*4;
                var r=0, g=0, b=0, a=0;
                var rmin=999, gmin=999, bmin=999;
                for(cy=0;cy<side;cy++)
                {
                    rmin=999, gmin=999, bmin=999;
                    for(cx=0;cx<side;cx++)
                    {
                        var scy=sy+cy-halfSide;
                        var scx=sx+cx-halfSide;
                        if(scy>=0 && scy<sh && scx>=0 && scx<sw)
                        {
                            var srcOff=(scy*sw+scx)*4;
                            if(src[srcOff]<rmin)
                                rmin=src[srcOff];
                            if(src[srcOff+1]<gmin)
                                gmin=src[srcOff+1];
                            if(src[srcOff+2]<bmin)
                                bmin=src[srcOff+1];
                        }
                    }
                }
                dst[dstOff]=rmin;
                dst[dstOff+1]=gmin;
                dst[dstOff+2]=bmin;
                dst[dstOff+3]=a+alphaFac*(255-a);
            }
        }
        ctx.putImageData(output,0,0);
    }
    function myFunction33()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var weights=[1, 1, 1, 1,1, 1, 1,  1, 1];
        var op=1;
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var side=Math.round(Math.sqrt(weights.length));
        var halfSide=Math.floor(side/2);
        var src=imageData.data;
        var sw=img.width;
        var sh=img.height;
        var w=sw;
        var h=sh;
        var output=ctx.createImageData(w,h);
        var dst=output.data;
        var alphaFac=op?1:0;
        for(y=0;y<h;y++)
        {
            for(x=0;x<w;x++)
            {
                var sy=y;
                var sx=x;
                var dstOff=(y*w+x)*4;
                var r=0, g=0, b=0, a=0;
                var rmax=-999, gmax=-999, bmax=-999;
                for(cy=0;cy<side;cy++)
                {
                    rmax=-999, gmax=-999, bmax=-999;
                    for(cx=0;cx<side;cx++)
                    {
                        var scy=sy+cy-halfSide;
                        var scx=sx+cx-halfSide;
                        if(scy>=0 && scy<sh && scx>=0 && scx<sw)
                        {
                            var srcOff=(scy*sw+scx)*4;
                            if(src[srcOff]>rmax)
                                rmax=src[srcOff];
                            if(src[srcOff+1]>gmax)
                                gmax=src[srcOff+1];
                            if(src[srcOff+2]>bmax)
                                bmax=src[srcOff+1];
                        }
                    }
                }
                dst[dstOff]=rmax;
                dst[dstOff+1]=gmax;
                dst[dstOff+2]=bmax;
                dst[dstOff+3]=a+alphaFac*(255-a);
            }
        }
        ctx.putImageData(output,0,0);
    }
    function myFunction34()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var weights=[1/9, 1/9, 1/9, 1/9,1/9, 1/9, 1/9,  1/9, 1/9];
        var op=1;
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var side=Math.round(Math.sqrt(weights.length));
        var halfSide=Math.floor(side/2);
        var src=imageData.data;
        var sw=img.width;
        var sh=img.height;
        var w=sw;
        var h=sh;
        var output=ctx.createImageData(w,h);
        var dst=output.data;
        var alphaFac=op?1:0;
        for(y=0;y<h;y++)
        {
            for(x=0;x<w;x++)
            {
                var sy=y;
                var sx=x;
                var dstOff=(y*w+x)*4;
                var r=0, g=0, b=0, a=0;
                for(cy=0;cy<side;cy++)
                {
                    for(cx=0;cx<side;cx++)
                    {
                        var scy=sy+cy-halfSide;
                        var scx=sx+cx-halfSide;
                        if(scy>=0 && scy<sh && scx>=0 && scx<sw)
                        {
                            var srcOff=(scy*sw+scx)*4;
                            var wt=weights[cy*side+cx];
                            r+=src[srcOff+1]*wt;
                            g+=src[srcOff]*wt;
                            b+=src[srcOff+2]*wt;
                            a+=src[srcOff+3]*wt;
                        }
                    }
                }
                dst[dstOff]=r;
                dst[dstOff+1]=g;
                dst[dstOff+2]=b;
                dst[dstOff+3]=a+alphaFac*(255-a);
            }
        }
        ctx.putImageData(output,0,0);
    }
    function myFunction35()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var weights=[1/9, 1/9, 1/9, 1/9,1/9, 1/9, 1/9,  1/9, 1/9];
        var op=1;
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var side=Math.round(Math.sqrt(weights.length));
        var halfSide=Math.floor(side/2);
        var src=imageData.data;
        var sw=img.width;
        var sh=img.height;
        var w=sw;
        var h=sh;
        var output=ctx.createImageData(w,h);
        var dst=output.data;
        var alphaFac=op?1:0;
        for(y=0;y<h;y++)
        {
            for(x=0;x<w;x++)
            {
                var sy=y;
                var sx=x;
                var dstOff=(y*w+x)*4;
                var r=0, g=0, b=0, a=0;
                for(cy=0;cy<side;cy++)
                {
                    for(cx=0;cx<side;cx++)
                    {
                        var scy=sy+cy-halfSide;
                        var scx=sx+cx-halfSide;
                        if(scy>=0 && scy<sh && scx>=0 && scx<sw)
                        {
                            var srcOff=(scy*sw+scx)*4;
                            var wt=weights[cy*side+cx];
                            r+=src[srcOff+2]*wt;
                            g+=src[srcOff+1]*wt;
                            b+=src[srcOff]*wt;
                            a+=src[srcOff+3]*wt;
                        }
                    }
                }
                dst[dstOff]=r;
                dst[dstOff+1]=g;
                dst[dstOff+2]=b;
                dst[dstOff+3]=a+alphaFac*(255-a);
            }
        }
        ctx.putImageData(output,0,0);
    }
    function myFunction36()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var weights=[1/9, 1/9, 1/9, 1/9,1/9, 1/9, 1/9,  1/9, 1/9];
        var op=1;
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var side=Math.round(Math.sqrt(weights.length));
        var halfSide=Math.floor(side/2);
        var src=imageData.data;
        var sw=img.width;
        var sh=img.height;
        var w=sw;
        var h=sh;
        var output=ctx.createImageData(w,h);
        var dst=output.data;
        var alphaFac=op?1:0;
        for(y=0;y<h;y++)
        {
            for(x=0;x<w;x++)
            {
                var sy=y;
                var sx=x;
                var dstOff=(y*w+x)*4;
                var r=0, g=0, b=0, a=0;
                for(cy=0;cy<side;cy++)
                {
                    for(cx=0;cx<side;cx++)
                    {
                        var scy=sy+cy-halfSide;
                        var scx=sx+cx-halfSide;
                        if(scy>=0 && scy<sh && scx>=0 && scx<sw)
                        {
                            var srcOff=(scy*sw+scx)*4;
                            var wt=weights[cy*side+cx];
                            r+=src[srcOff]*wt;
                            g+=src[srcOff+2]*wt;
                            b+=src[srcOff+1]*wt;
                            a+=src[srcOff+3]*wt;
                        }
                    }
                }
                dst[dstOff]=r;
                dst[dstOff+1]=g;
                dst[dstOff+2]=b;
                dst[dstOff+3]=a+alphaFac*(255-a);
            }
        }
        ctx.putImageData(output,0,0);
    }
    function myFunction37()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var weights=[1/9, 1/9, 1/9, 1/9,1/9, 1/9, 1/9,  1/9, 1/9];
        var op=1;
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var side=Math.round(Math.sqrt(weights.length));
        var halfSide=Math.floor(side/2);
        var src=imageData.data;
        var sw=img.width;
        var sh=img.height;
        var w=sw;
        var h=sh;
        var R=5;
        var output=ctx.createImageData(w,h);
        var dst=output.data;
        var alphaFac=op?1:0;
        for(y=0;y<h;y++)
        {
            for(x=0;x<w;x++)
            {
                var sy=y;
                var sx=x;
                var dstOff=(y*w+x)*4;
                var r=0, g=0, b=0, a=0;
                for(cy=0;cy<side;cy++)
                {
                    for(cx=0;cx<side;cx++)
                    {
                        var x0=Math.random()*(2*R)-R;
                        var scy=sy+cy-halfSide;
                        var scx=sx+cx-halfSide;
                        if(scy>=0 && scy<sh && scx>=0 && scx<sw)
                        {
                            var srcOff=parseInt((scy*sw+scx+x0)*4);
                            var wt=weights[cy*side+cx];
                            r+=src[srcOff+0]*wt;
                            g+=src[srcOff+1]*wt;
                            b+=src[srcOff+2]*wt;
                            a+=src[srcOff+3]*wt;
                        }
                    }
                }
                dst[dstOff]=r;
                dst[dstOff+1]=g;
                dst[dstOff+2]=b;
                dst[dstOff+3]=a+alphaFac*(255-a);
            }
        }
        ctx.putImageData(output,0,0);
    }
    function myFunction38()
    {
        
        if(document.getElementById("btns").className!="btns")
            document.getElementById("btns").className="btns";
        var weights=[1/9, 1/9, 1/9, 1/9,1/9, 1/9, 1/9,  1/9, 1/9];
        var op=1;
        var imageData=ctx.getImageData(0,0,img.width,img.height);
        var side=Math.round(Math.sqrt(weights.length));
        var halfSide=Math.floor(side/2);
        var src=imageData.data;
        var sw=img.width;
        var sh=img.height;
        var w=sw;
        var h=sh;
        var R=5;
        var output=ctx.createImageData(w,h);
        var dst=output.data;
        var alphaFac=op?1:0;
        for(y=0;y<h;y++)
        {
            for(x=0;x<w;x++)
            {
                var sy=y;
                var sx=x;
                var dstOff=(y*w+x)*4;
                var r=0, g=0, b=0, a=0;
                for(cy=0;cy<side;cy++)
                {
                    for(cx=0;cx<side;cx++)
                    {
                        var scy=sy+cy-halfSide;
                        var scx=sx+cx-halfSide;
                        if(scy>=0 && scy<sh && scx>=0 && scx<sw)
                        {
                            var srcOff=(scy*sw+scx)*4;
                            var wt=weights[cy*side+cx];
                            r+=src[srcOff+0]*wt;
                            g+=src[srcOff+1]*wt;
                            b+=src[srcOff+2]*wt;
                            a+=src[srcOff+3]*wt;
                        }
                    }
                }
                var mr=(Math.abs(g-b+g+r)*r)>>8; 
                var mg=(Math.abs(b-g+b+r)*r)>>8; 
                var mb=(Math.abs(b-g+b+r)*g)>>8;
                if(mr>255) r=255;
                else r=mr;
                if(mg>255) g=255;
                else g=mg;
                if(mb>255) b=255;
                else b=mb;
                dst[dstOff]=r;
                dst[dstOff+1]=g;
                dst[dstOff+2]=b;
                dst[dstOff+3]=a+alphaFac*(255-a);
            }
        }
        ctx.putImageData(output,0,0);
    }
