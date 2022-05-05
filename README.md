# Japan Travel Guide

# [Heroku Live Link](https://damon-travel-japan-guide.herokuapp.com/)

## About
This is a Japan travel guide application built with React.js. After signing up as a user, users will be able to access the website to read about several destinations in Japan. Admin users will be able to create articles to the Destinations category and also edit and delete the articles.

## Motivation
This website was intended as a passion project for myself and anyone who is interested in traveling to Japan. I enjoy learning about Japan's culture and I hope that anyone using this application can benefit from using this guide when planning a trip to Japan.

## Technologies Used
* HTML, CSS, JavaScript
* Bootstrap v.4.6.1
* NodeJS, Express
* REACT
* MongoDB/Mongoose 
* Heroku
* Postman
* JWT User Authentication [more info](https://jwt.io/introduction)
* Visual Studio Code

## For Developers
Clone the source locally:
```
$ git clone https://github.com/dfung003/travel-japan-guide
$ cd travel-guide-japan
```

## Getting Started
![Signup Form](/public/assets/signup_form.png)
* You will be taken to a sign-up form where you will be able to sign up using your name, email address, and created password. <br />
![Login Form](/public/assets/login_form.png)
* Once you have signed up, you should be taken to the home page. Or if you are logged out, press ```Go to login form``` in order to log in. You should be taken to the home page unless your credentials do not match.

## Features
![Home Page](/public/assets/homepage_screenshot.png)
* Once logged in, you will be able to press on Destinations that gives you a dropdown menu on several destinations. Click on any of them to view an article page. 
* As an admin user, you will be able to edit or delete the article by pressing each of the corresponding buttons. <br />
![Destination Page](/public/assets/city_screenshot.png)
* As an admin user, you will be able to create an article by pressing Create Article on the navigation bar. Once on the create page, you will be able to fill in the forms and submit them into the application. <br />
![Create Article Page](/public/assets/create_destination_admin.png)
* As a guest user, you will not have the option to create, edit, or delete an article. Notice that Create Article on the navigation bar is not present. <br />
![Guest User Nav](/public/assets/guest_user_homepage.png)

## Unsolved Problems
* Navigation dropdown menu: The dropdown is pushing the navigation bar down and expanding it. I am currently using Bootstrap v.4.6.1 and I would like it to overlap with the content below it instead of expanding the menu within the navigation bar.
* Footer styling: My footer needs a bit of work especially on the Create Article page. It is should be at the bottom of the page regardless of how little content there is on the page.

## Future Enhancements
* Comment section on each Destination article
* Section on transportation in Japan
* Rating system for each of the points of interest
* Overall aesthetic of the website to make it look more modern

## Credits
* [japan-guide.com](https://www.japan-guide.com/), my main source on the content of my website
* [japan.travel](https://www.japan.travel/en/us/), my secondary source
* [nomadicmatt.com](https://www.nomadicmatt.com/travel-guides/), my source on how a blog website should look like
* Special thanks to Anthony R, Dan N, Lucas B, Moses B, Roy D, Wesley B, and the GA instructors for helping me put together this project

## Resources
* [Bootstrap v.4.6.1 Nav Bar](https://getbootstrap.com/docs/4.6/components/navbar/)
* [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flexbox-tricks)
* [White-Space Styling](https://stackoverflow.com/questions/42093846/preserving-new-lines-and-spaces-in-text-area-not-working)
* [CSS Hover Selector](https://www.w3schools.com/cssref/sel_hover.asp)
* [GitHub Button](https://buttons.github.io/)
* [LinkedIn Button](https://fontawesome.com/icons/linkedin?s=brands)
* [Wireframe](https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=travel-unit-3.drawio#R%3Cmxfile%20pages%3D%225%22%3E%3Cdiagram%20id%3D%22hKpwbRfr8kEemVuAM2QY%22%20name%3D%22Auth%20Page%22%3E7Zffb5swEMf%2FGh4jGfOj6SOkbSqlk9JlW6e9OcEBb4ajxiRp%2F%2FrZwQQIdGq1ZFOnPcX%2Bnn2273O%2BGMuZpLupIHnyASLKLYyineVcWRjbGLnqRytPlXLp4EqIBYvMoEZYsGdqRGTUkkW06AyUAFyyvCuuIMvoSnY0IgRsu8PWwLur5iQ2K6JGWKwIp71hDyySSaWOvdboW8ripF7ZRsaSknqwEYqERLBtSc615UwEgKxa6W5CuQ5eHZdq3s0L1sPGBM3kaybM6DRMb9eLFKWl%2FPJ1cxG4MDJeNoSX5sBms%2FKpjoCAMouodoIsJ9wmTNJFTlbaulXMlZbIlKuerZqEszhTbVGFJExAsGfIJOFm%2Flp1DGV7rPqcLCmfQ8EkAz2R07Wet6FCMkXh7sgsIW9ZA7PaEqSEVBn6MakPqGbQXUsyMZpSSKkUT2qIsY5cw8sk7OhAdNvwd8dGS1rsnTpnicm5%2BOC8waIahswwJf%2FTJHS%2BCTHbRCK4n32E%2B%2FRhhAco%2BXwfX3UYP9atoFSbw2iu89kY1VqNvcdVxUMOw1up6FExEOeURZGeHgpasGey3LvSVHNgmdyf2gst70r7KqWiVnFW3UIK%2BEEnwEH5vcog017WjPMj6QQAbcc7Ajj2egBtZwCgdy5%2BTo%2FfdUqYchG8DyrHl%2FYU18w%2BouT1IV0MXbJzMfJ6jOakKLYgov%2BYOtWwf5fQn%2BTkv1gL9fE7lPzHEmrDqIqnIomwm%2B8aY10f7yBmWatyVt7eU%2B08A37b6%2BL3%2F%2FIlvfh9%2BGgI%2FkIzwuhz%2Fq8kAHZN%2Fwz%2Fr243J4beR5cDSeGeICm84FGQIByPHxa4vNl43%2Fl0%2BYvX0auTwnmhIsBr8%2BFNj%2BQ2JzTMqc4m8xw%2BRSXH6PhheznwLsID5Py3k1Pd5stmb2t9HzrXPwE%3D%3C%2Fdiagram%3E%3Cdiagram%20id%3D%22vlu9s2V7TbgRv0EX-IS9%22%20name%3D%22Sign%20Up%20Page%22%3E7ZfNcpswFIWfhqVnABmCl%2F5Ls2jSpK6na8WSQangUiEX7KevAGGMRaZ2x3YXzQbEudJFnO8KhIWmcfFJ4DR6BEK55dqksNDMct1RgNSxFLa14AWjWggFI7XktMKC7agWba1uGKFZp6ME4JKlXXEFSUJXsqNhISDvdlsD7941xSE1hMUKc1P9zoiMajXw7FZ%2FoCyMmjs7to7EuOmshSzCBPIDCc0tNBUAsm7FxZTy0rvGl3rc%2FTvR%2FcQETeQpA17s8f2bjYLFeAdfl1%2B%2BLcmcDnSWX5hv9APrycpt44CATUJomcS20CSPmKSLFK%2FKaK6QKy2SMVdXjmquIZEaomvr6ylwEEpIIFH6RN%2BRCkmLdx%2FF2RukCotCTKXYqi7NgKFXD9FF5TQ48haRh7QWHeBxR1rEuizCfe7WOdXQ5p1hpNtjpM%2BltqDjqP9zA01gkFVmjVUH10uLNqhaYXlesDBRwWWqDs9lreqsapJ14rqbQU2ZK7toMC9TodlKmUwVj0mJgKlKH%2BtAzAgph08EVbPCr1WqEmIKLJGVYd7E8mZlro2EeuZV6kwK%2BEGPOK8Z58fSTaoDud3qQJ5RHM5dT3Gga9UGMmrjCcc19T9SO9Xa0%2Bn2reDuGj%2FE5F0N0%2F4VrzG5trmI%2FVtiGhqY5jFm%2FIPTEafhP%2BbkGZyecZblIMh%2Fj8o%2FQhWYqJxbovINVFNI1kzE1dfsA1rnvdd8rlwTmtrh3JBaYFA72IVcand4PUON77%2Ffswr63ljDCxjqwy7cseJxOXrJ5Z18Grz6pHeXfebm0OnbHH6GEE7dEP4tKCfoB9UsNE7X8jLchkfroIea20PNP5%2Baumz%2Fu6rYwc8rmv8G%3C%2Fdiagram%3E%3Cdiagram%20id%3D%22dP3E9piwFNi0i8BM_oyw%22%20name%3D%22Home%20Page%22%3E1Vdtb9MwEP41leBDUV6abv24doNJgJgoaOKj11wShyQXHGdu%2BfWcY6dJmxQxWCX2pbGfe7PvnrPdib%2FKt%2B8EK5OPGEI28ZxwO%2FGvJ563uPTpVwM7AwSXCwPEgocGcjtgzX%2BCBR2L1jyE6kBRImaSl4fgBosCNvIAY0KgOlSLMDuMWrIYBsB6w7Ihes9DmRj0MnA6%2FBZ4nLSRXcdKctYqW6BKWIiqB%2Fk3E38lEKUZ5dsVZDp3bV6M3dsT0v3CBBTyTwy88MYpRXD3qX74vJvB9LMXJVPr5ZFltd3wxJtn5G8ZIbmlVcudTcX8R42tYFo1hboiBS8ot52QRrH%2B3mIOJLzT2bUOaWXGp9GwSdm79yRsNZ7IPCPApWElBX6HFWYoCCmwAB2eZ9kRxDIeFzTdUCaA8OUjCMmphldWkPMw1GGWKuES1iXb6JiKCEuYwLoIQSfJsbuzLPTa%2BVE4mzKKAduTtXD3FabOAMqGFDtSsQb%2BzJLCdkU7VR3F3BZLevTyLcYsq%2BO9567wNLC1fwIP%2FAEPTAVN6aqSFaNcaPI5rUxCNRtKAUMy0Hfi%2BQszarlgfO4VXnaccy%2F8%2BgQOleQFkxyLatBPHa%2FdE8zvtVqf9sE47dsuyyDq%2BvefumB%2B2AT7o7PXBRfOSBfMztUFs0EXfMAYf5NZ52mZPXGgnD2z3sjx4o4kNjhXYoORxArItVlZ1fobcowSBZhEHBPkUcpRpYART5GTOFXIgVRopiCNDIaco3ahUvolGwWMoxZq7ajBtFwjjUrztU4oglXSgNKXVcoiTFWrF2HjQNlgygRWjUHrTKdKmzfy6I0xaNxbDR2DdsG1a9pJamz01pjeo2IUZM5yTZnioSrHrsX%2Fn2yuf9THF0O6BfOx28x9Br7dp18Ceftt%2FZ6tq%2BXXBaTV9eoZnjXuxeizhmJTyWhRTl2BKFjzynnVOq9bvYyOjVq%2B7p3a9fEd9PKeQ%2F7ZnkPB4CYIBgzyxm6Cv3gP0bR7czey3h8X%2F%2BYX%3C%2Fdiagram%3E%3Cdiagram%20id%3D%223VWdc25y2DHZZMonv7vu%22%20name%3D%22Destinations%20Page%22%3E7Vnbbts4EP0aA%2B1DCl0sXx4dJ26CZtssXKC7TwVhjSQqlEaRqJWzX79DibItiUXThdUNmn2xyEOKlzOHMyN64q6T%2FfucZdFv6IOYOJa%2Fn7hXE8dZ2DP6VcBTA3iLZQOEOfcbyD4CW%2F43aNDSaMl9KDodJaKQPOuCO0xT2MkOxvIcq263AEV31oyFMAC2OyaG6Bfuy0hvy7OO%2BA3wMGpnti3dkrC2swaKiPlYnUDu9cRd54iyKSX7NQjFXctL897mG62HheWQyue8sFo93e0eyo8PD%2Bnnxfoj8uRqe6FH%2BYuJUm%2F4DkPUC5ZPLQs5lqkPaiBr4l5WEZewzdhOtVZkdsIimQiq2VQMMJXakI6n62sUmBOQYkr45XDt7UIgl7A%2FgfRe3gMmIPMn6qJbXU2r1lXLcnU0kt1i0YmBZhpjWhfhYeAjdVTQ7P0Ak86AySsoJE%2BZ5JhSw70SWp9X2qvsklfIHB%2BgR1fAhehBTPAwpeqOGATCLxVznHS70g0J9301jdFaXXv%2BJIM5XYu5Q4sdTv2pxdyxLOYOLHZDI0%2BcmVA2KTKWdow1eyzVUW34vCgaQleKlRyOrVQK9XPiuMumJBpk04x56PD%2FPC94npPTW%2Fxqe2thddCN86iGi6J2CWoWe5Hth9Pc0BmjUEGHzyoLyFOWwJt25LLtJCiclPLtyULK%2FioIaxbSwt8MPvZZgk%2FrOgUEx%2FnOGYuWQ882Xxg8mzeWZ5sOPNvnTx%2F%2B%2FPSqw88hMdNGsueGjGFqsNJ8LCt5AyvREWCJIqg%2BFzwJJypmbg7w987Hi0nO5r3kbGaI9a6B64MBzk72zET2DzlBosTgBO8xKwXLqX2D6D%2FXpb2mg9fTwnTxzLxvNO84H00KPJWUK1gY0M%2Btsg%2FlELTErdpUAcDT8OcJREe3Fy8Pd9bzy9OhPqYmfTij%2BYrFQCB3mEOiXsuKUj0DjlUEyIOIChCpAj15FCCPVDeEKmJUoTJU9bVDjSNX%2BLFe0YuUv1nv6iGpqR6I12%2FQcKjGY9WLF4c1nji83jejbRCHKZAsx9LG8rva4BXZDRrb83pZdbmWSq2BGDCrglitrsIsiGtz16qJIcCMxZWqxbUo4irDmEVBRtKJg1oXJIk4gOrdK5ZFL6R43lAVB%2BV00ovR7hJaXf53ydx4bHu9zHlq%2BL5xjHSfI4T%2F%2FvjhLnE3cv91%2Fsfj%2Fnazvf96a7i2vPa5Ct0rpVyhfOobro4L8xOe6g%2FUt2cj216M95my7JI9N1xsGtOlc0RDI9emi00BEn4FtqfuM9g2xZd%2FwTZVj5f9ddvJPybu9T8%3D%3C%2Fdiagram%3E%3Cdiagram%20id%3D%22qY98rmyjoojy_nSAAwIP%22%20name%3D%22Admin%20Page%22%3E7VjBcpswEP0ajpkBBMQcHSduOnUzTt06vWVkI4NaIVEhF9Ovr2SEMSDPpInJpJ1ebOlJ7Ir3lt0FC0zS3TsOs%2BQjixCxXDvaWeDact1wBOSvAsoK8EdhBcQcRxXkNMAC%2F0IatDW6xRHKWxsFY0TgrA2uGaVoLVoY5JwV7W0bRtpeMxijHrBYQ9JHH3Akkgod%2BXaD3yIcJ7Vnx9YrKaw3ayBPYMSKIwjcWGDCGRPVKN1NEFHc1bxU101PrB4OxhEVT7lgm8FZ8PB475Q2gbPRyvYz70Jb%2BQnJVt%2BwPqwoawY429IIKSO2Ba6KBAu0yOBarRZScoklIiVy5sjhhlGhRXRGej5hhHEJUEYlfqU9Ii7Q7uStOAeCZGAhliLBS7mlvsDTnJadedFI5IYaS47kqWWDOirig%2BmGODnQ3Jl5nIM1Kr95n2b4frmZfwhcb3xv4HEcpZhKaK4CrMupvHXRJi4XnH1HHao2mJAOBAmOqZyuJVVI4leKSCzjdawXUhxFyo1RqbaWR2K59mBiuaHfEss1aBUYtPKG0gr0tLqVli03IEqTPIO0JVbwY6se0YrPi7widKwo4KhZlaNY%2F1suCKsRqZBpZfOw4b%2Bft%2BRn6INfn8BRLjCFAjOa%2F%2FUc%2Fmt%2BXuvgPfhk7XX%2BqPaeSud19SBo0%2Fh7UXYP2pX4sp%2FcL8FrJnevl9wnHEEhRbLHqlCSfjF%2BboMzYM0M3A6tfo9WxzfQCoai1e%2FReocKCVw3WWz%2FPAQwVYTRVZ6Z4vnlfY%2BO3Dff9TypRTW1PYO1qKOehHOGqZDFx2Yb%2BfNeNZRSTml8oY6TI4RpXGW5qtmUr15KP%2BmH7l%2BleLo%2FOz%2F0TiteZ7IvGWEwUlbTff%2FbXX8KMmVMWVhkTB7yPMcY%2BMk%2Ff3rthpFr98PIM73pOJdDxVHYi6PFdpViJch0r8XbT68AtFn1DKw6JlbPUbbsz3cMFg%2FLr49luJwzmM7cxPD%2BOGMxOx%2BX4LUC1u%2BkPQOxpn7gGVlPTpuPJ%2Fu1oy9Q4OY3%3C%2Fdiagram%3E%3C%2Fmxfile%3E)
* [ERD](https://lucid.app/lucidchart/19be50b7-5b47-4356-89fe-6e71ba647330/edit?invitationId=inv_b442f74e-5484-4b01-a29a-d6c8cf34f9d0) <br />
![ERD](/public/assets/erd_diagram.png)
* For Trello Board, please refer to the Projects page on GitHub
