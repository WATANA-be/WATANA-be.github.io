 <DOCTYPE! html>
        <html>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Bitter&display=swap" rel="stylesheet">
                <link href="css/style.css" rel="stylesheet">
                <meta charset="UTF-8">
                <title>WATANABLOG</title>
            </head>
          
            <body id="index">
                <header>
                    <h3>
                        <div class="logo">
                            <a href="index.html">
                                <img src="images.logo.png" alt="WATANABLOG">
                            </a>
                        </div>
                    </h3>
                    <nav>
                        <ul class="global-nav">
                            <li><a href="portforio.html">Portfolio</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </header>
                <div id="wrap">
                <div class="content">
                     <link href="https://fonts.googleapis.com/css2? family=Bitter&display=swap" rel="stylesheet">
                   
                    <h1>Welcome to my blog!!! </h1>
                    <p>このブログでは「あなたの日常をちょっとずつ豊かにする」をモットーに、筆者の見つけた便利なツール、ファッション、ライフハックなどを紹 介していきます。</p>
                    <img src="ichiran.png" id=ichiran> 
                    </div>
                
                    <!--コピペ罪-->
               
                
        <?php if( !is_paged() && is_home() ): //人気記事?>
    <p class="center strong top-title"><i class="fa fa-line-chart"></i> 人気記事</p>
                    <div class="popular-posts cardtype">
    <article class="cardtype__article">
        <a class="cardtype__link" href="★リンク先URL★">
            <p class="cardtype__img">
                ★<img src="hajimemashite.jpg"
                      width=520px 
                      height=300px>★
        </p>
        <div class="cardtype__article-info">
            <h2>初めまして！！</h2>
            </div>
        </a>
    </article>
    <article class="cardtype__article">
        <a class="cardtype__link" href="★リンク先URL★">
            <p class="cardtype__img">
                ★<imgタグ>★
                </imgタグ>
            </p>
        
            <div class="cardtype__article-info">
                <h2>★タイトル★</h2>
            </div>
        </a>
    </article>
                </div>
                <p class="center strong top-title"><i class="fa fa-thumb-tack"></i> 新着記事</p>
                <?php endif; //END 人気記事?>
                
           <!--コピペ罪終わり-->     
                
                         
            </div>              
            <footer>
                 
                <small>(c)2020 WATANABLOG</small>
                 
            </footer>
        </body>
    </html>
    
