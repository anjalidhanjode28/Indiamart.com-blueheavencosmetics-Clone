const navbar = () => {
    return `<header>
    <div id="navMainDiv">
        <div id="indiamart"><img src="./images/indiamart.png" alt=""></div>

        <div class="searchDiv">
            <div id="searchbox1"><button> India <i class="fas fa-caret-down"></i></button></div>
            <div id="searchbox2"> <input oninput="debounce(main,3000)" type="search" id="searchbar" placeholder="Enter Product"></div>
            <div id="searchbox3"><button id="submit"><i class="fa-solid fa-magnifying-glass"></i>Search</button></div>
        </div>

        <div id="nav-btn"> <button>Get Best Price</button></div>

        <div id="nav-icon">
            <div><a href="shopping.html"><i class="fa-solid fa-cart-arrow-down img"></i>Shopping</a></div>
            <div><a href="#"><i class="fa-solid fa-shield-halved img"></i>Covid Supplies</a></div>
            <div><a href="#"><i class="fa-solid fa-shop img"></i>Sell</a></div>
            <div> <a href="#"><i class="fa-solid fa-circle-question img"></i>Help</a></div>
            <div><a href="#"><i class="fa-solid fa-comment-dots img"></i>Messages</a></div>
            <div><a href="signup.html"><i class="fa-solid fa-user-large"></i>Sign In</a></div>

        </div>
    </div>
</header>


    <div id="nav2">
      <div id="blue"><img src="./img/blueh.jpg"></div>

        <div id="nav2-part2">
            <div id="navUp"><h2>Blue Heaven Cosmetics (P) Ltd</h2></div>
            <div id="navDown">
                <div id="down1"><i class="fa-solid fa-location-dot"></i>Kirti Nagar, New Delhi, Delhi</div>
                <div id="down2"><i class="fa-solid fa-check"></i> GST 07AACCB1155C1ZB</div>
                <div id="down3"><i class="fa-solid fa-check"></i>Verified Supplier</div>

                <div id="down4"><i class="fa-solid fa-thumbs-up"></i>4.2/5 <span id="star1" class="down ds">
                    <i class="fa-solid fa-star star"></i>
                    <i class="fa-solid fa-star star "></i>
                    <i class="fa-solid fa-star star"></i>
                    <i class="fa-solid fa-star star"></i>
                    <i class="fa-solid fa-star star grey"></i></span>
                </div>

                 <div id="nav2-btn"><button><i class="fa-solid fa-phone"></i>Call 08048361220 Ext 167</button></div>
            </div>
        </div>
    </div>

 <!-- navbar3 -->
 <div id="nav3">
    <div class="navbar3">
        <div class="dropdown">
        <button class="dropbtn"><a href="index.html">Home</a> </button>
        <div class="dropdown-content">
          
        </div>
      </div>
    
       <div class="dropdown">
        <button class="dropbtn"><a href="products.html">Product & Services</a> </button>
        <div class="dropdown-content">
            <div>
                <div>
                <h4> Make UP</h4>
                <p> Foundation</p>
                <p> Compact</p>
                <p> Pan cake Foundation</p>
                <p> Pan Stick Foundatation</p>
               </div>
               <div>
                <h4>Lipstick</h4>
                <p>Baked Brick Lipstick</p>
                <p>erise Pink Lipstick</p>
                <p>Coral Red Lipstick</p>
                <p>Desert Rose Lipstick</p>
               </div>
               <div>
                <h4>Lip Product</h4>
                <p>Lip Gloss</p>
                <p>Lip Stick</p>
                <p>Lip Liner</p>
                
               </div>
               <div>
                <h4>Scrubs</h4>
                <p>Fairness Scrub</p>
                <p>Mix Fruit Scrub</p>
                <p>Facial Scrub</p>
               
               </div>
               <div>
                <h4> Lip Care</h4>
                <p> Lip lip-balm</p>
                <p> Lip Guard</p>
                
               </div>
               <div>
                <h4>Eye Products</h4>
                <p>Mascara</p>
                <p>Eye Shadow</p>
                <p>Eye Liner</p>
               </div>

               <div>
                <h4>Bleach Cream</h4>
                <p>Fruit Bleach</p>
                <p>Gold Bleach</p>
                <p>Personal Bleach</p>
               </div>
               
            </div>
          
        </div>
      </div>
      
      
      <div class="dropdown">
        <button class="dropbtn"><a href="about.html">About Us</a></button>
        <div class="dropdown-content">
          <a href="#">Custom Profile</a>
          <a href="#">Testimonial</a>
          <a href="#">Download Brouchure</a>
        </div>
      </div> 
      <div class="dropdown">
        <button class="dropbtn"><a href="contact.html">Contact Us</a> </button>
        <div class="dropdown-content">
         
        </div>
      </div>
    </div>
  
    <div id="nav3-btn"><button><i class="fa-solid fa-envelope"></i>Send Email</button></div>
</div>`
}


const footer = () => {
    return `<footer>
    <div id="footer1">
        <div id="footer2">We are here to help you!</div>
     <div id="footer3">
        <div id="fpart1">
            <div>Go Mobile:</div>
           <div><img src="./img/download.png"></div> 
           <div><img src="./img/android.jpg"></div>
            <div><img src="./img/mobo3.png" ></div>
        </div>

        
        <div id="fpart2">
            <div>Follow us on:</div>
            <div><img src="./img/fb1.png">
            </div>
            <div><img src="./img/twi1.png"></div>
            <div><img src="./img/ink1.png" ></div>
        </div> 
    </div>
    </div>

 <div id="fstart">
    <div>
        <p>About Us</p>
        <p>Join sales</p>
        <p>Success Dtories</p>
        <p>Press Section</p>
        <p>Advertise with us</p>
        <p>Jobs & Careers</p>
    </div>
    <div>
       <p>Help</p>
       <p>Feedback</p>
       <p>Complaints</p>
       <p>Customer Care</p>
       <p>Contact us</p>
    </div>
    <div>
        <h5>Suppliers Tool Kit</h5>
        <p>Sell on IndiaMART</p>
        <p>Latest BuyLead </p>
        <p>Learning Center</p>
    </div>
    <div>
        <h5>Buyers Tol Kit</h5>
        <p>Post Your Requirement</p>
        <p>Products You Buy</p>
        <p>Search Products & Suppliers</p>
        <p>Pay With indiaMART</p>
    </div>
    <div>
        <h5>Events</h5>
        <p>Trade Shows</p>
        <p>Conference</p>
        <p>Events by Country</p>
    </div>
 </div>

</footer>`
}

export { navbar , footer };