
  var a = 0.0,
  b = 0.0,
  speed1 = 0.5,
  speed2 = 0.1,
  c = 0;

function setup() {
  createCanvas(1280, 968);
}

function draw() {
  background(255);
  strokeWeight(4);
  
  
  stroke(0,106,0);
  
  beginShape(); //flower
  curveVertex(308-b,163);    
  curveVertex(308-b,163);      
  curveVertex(311-b,154);      
  curveVertex(313-b,148);      
  curveVertex(323-b,139);     
  curveVertex(323-b,127);     
  curveVertex(318-b,117);     
  curveVertex(329-b,103);       
  curveVertex(322-b,120);       
  curveVertex(311-b,106);     
  curveVertex(315-b,99);        
  curveVertex(300-b,117);     
  curveVertex(297-b,111);     
  curveVertex(300-b,105);     
  curveVertex(308-b,96);    
  curveVertex(304-b,104);    
  curveVertex(304-b,104);
  endShape();
  
  stroke(0,0,106);
  
  beginShape(); //blue flower
  curveVertex(298-b,88);
  curveVertex(298-b,88);
  curveVertex(282-b,89);
  curveVertex(284-b,97);
  curveVertex(285-b,76);
  curveVertex(282-b,89);
  curveVertex(275-b,85);
  curveVertex(274-b,81);
  curveVertex(280-b,79);
  curveVertex(268-b,96);
  curveVertex(269-b,101);
  curveVertex(278-b,93);
  curveVertex(278-b,87);
  curveVertex(278-b,87);
  endShape();
  
  stroke(186,0,0);
  
  beginShape(); //red flower
  curveVertex(321-b,88);
  curveVertex(321-b,88);
  curveVertex(300-b,76);
  curveVertex(300-b,78);
  curveVertex(315-b,90);
  curveVertex(309-b,93);
  curveVertex(302-b,89);
  curveVertex(301-b,84);
  curveVertex(319-b,85);
  curveVertex(321-b,80);
  curveVertex(319-b,85);
  curveVertex(310-b,77);
  curveVertex(319-b,85);
  curveVertex(317-b,74);
  curveVertex(317-b,74);
  endShape();
  
  stroke(0,0,106);
  
  
  
  
  
  stroke(0,0,106);
  
  beginShape(); //head
  curveVertex(309,191); 
  curveVertex(309,191); 
  curveVertex(329-b,175); 
  curveVertex(332-b,168); 
  curveVertex(329-b,160); 
  curveVertex(326-b,155); 
  curveVertex(326-b,147); 
  curveVertex(313-b,130);  
  curveVertex(336-b,143);  
  curveVertex(308-b,121); 
  curveVertex(324-b,126);
  curveVertex(334-b,134);
  curveVertex(337-b,142);
  curveVertex(333-b,132);
  curveVertex(349-b,136);
  curveVertex(326-b,126);
  curveVertex(380-b,142);
  curveVertex(378-a,206);  
  curveVertex(389,243);  
  curveVertex(408,233);        
  endShape();
  
  beginShape(); //left wing
  curveVertex(307,212);
  curveVertex(307,212);
  curveVertex(294+a,185);
  curveVertex(264+a,150);
  curveVertex(234+a,121);
  curveVertex(204+a,99);
  curveVertex(174+a,82);
  curveVertex(134+a,64);
  curveVertex(104+a,52);
  curveVertex(74+a,44);
  curveVertex(47+a+b,43-b);
  curveVertex(39+a+b,44-b);
  curveVertex(34+a+b,45-b);
  curveVertex(32+a+b,47-b);
  curveVertex(31+a,48-b); //
  curveVertex(33+a+b,50-b);
  curveVertex(42+a+b,63-b);
  curveVertex(95+a+b,111-b);
  curveVertex(159+a,164-b); //
  curveVertex(126+a+b,156-b);
  curveVertex(91+a,153-b); //
  curveVertex(104+a+b,184-b);
  curveVertex(142+a+b,226-b);
  curveVertex(177+a,250-b); //
  curveVertex(150+a+b,250-b);
  curveVertex(116+a+b,259-b);
  curveVertex(105+a,269-b); //
  curveVertex(111+a+b,277-b);
  curveVertex(151+a+b,299-b);
  curveVertex(206+a,316);
  curveVertex(239+a,321);
  curveVertex(259,320);  
  curveVertex(259,320);  
  endShape();
  
  
  beginShape(); //right wing1
  curveVertex(387,215); 
  curveVertex(393,208);  
  curveVertex(400,200);   
  curveVertex(407,193);  
  endShape();
  
  beginShape(); //right wing2
  curveVertex(420,178); 
  curveVertex(420,178); 
  curveVertex(464-a,138);  
  curveVertex(553-a,79);   
  curveVertex(618-a,55);    
  curveVertex(629-a,57-b);  //
  curveVertex(626-a,66-b); 
  curveVertex(574-a,120-b);     
  curveVertex(535-a,160-b); //
  curveVertex(576-a,150-b);   
  curveVertex(595-a,155-b);    
  curveVertex(595-a,170-b); //   
  curveVertex(555-a,214-b);     
  curveVertex(489-a,243-b); //   
  curveVertex(538-a,238-b);    
  curveVertex(557-a,249-b);   
  curveVertex(558-a,259-b); //    
  curveVertex(545-a,275-b);   
  curveVertex(483-a,309-b);   
  curveVertex(426-a,321-b); //  
  curveVertex(393,324);  
  curveVertex(393,324);    
  endShape();
  
  
  
  beginShape(); //stoma
  curveVertex(356-a,353); 
  curveVertex(327-a,368); 
  curveVertex(393-a,320); 
  curveVertex(415-a,261); 
  curveVertex(366-a,255);       
  endShape();
  
  beginShape(); //chick
  curveVertex(203,323);
  curveVertex(203,323);  
  curveVertex(211-b,330);  
  curveVertex(192-b,348); 
  curveVertex(151-b,368);
  curveVertex(94-b,402);
  curveVertex(84-b,412); 
  curveVertex(94-b,421);
  curveVertex(119-b,421);  
  curveVertex(147-b,409);
  curveVertex(157-b,411);
  curveVertex(155-b,416);
  curveVertex(147-b,429);
  curveVertex(148-b,442);
  curveVertex(164-b,443);
  curveVertex(194-b,427);
  curveVertex(222-b,408);
  curveVertex(213-b,439);
  curveVertex(213-b,458);
  curveVertex(222-b,472);
  curveVertex(247-b,464);
  curveVertex(272-b,435);
  curveVertex(283-b,409);
  curveVertex(275-b,445);
  curveVertex(277-b,461);
  curveVertex(286-b,469);
  curveVertex(308-b,450);
  curveVertex(322-b,422);
  curveVertex(324-a,377); 
  curveVertex(324-a,377);                   
  endShape();
  
  
  stroke(186,0,0);
  
  beginShape(); //leftfoot
  curveVertex(276-b,345);
  curveVertex(276-b,345);
  curveVertex(286-b,341);  
  curveVertex(288-b,347);
  curveVertex(294-b,349);   
  curveVertex(288-b,347);  
  curveVertex(285-b,356); 
  curveVertex(291-b,352); 
  curveVertex(292-b,354); 
  curveVertex(297-b,348); 
  curveVertex(298-b,353); 
  curveVertex(295-b,360); 
  curveVertex(295-b,364); 
  curveVertex(295-b,364);                         
  endShape();  
  
  beginShape(); //rightfoot
  curveVertex(326-b,349); 
  curveVertex(326-b,349);
  curveVertex(336-b,334);
  curveVertex(336-b,338);
  curveVertex(327-b,353);
  curveVertex(334-b,349);
  curveVertex(336-b,353);
  curveVertex(346-b,353); 
  curveVertex(336-b,353);
  curveVertex(330-b,362);
  curveVertex(343-b,360);
  curveVertex(339-b,357); 
  curveVertex(343-b,360);
  curveVertex(334-b,372);  
  curveVertex(334-b,372);                                        
  endShape();  

  
  stroke(0,106,0); 
  
  beginShape(); //brick
  curveVertex(239-b,363); 
  curveVertex(239-b,363); 
  curveVertex(270-b,352);
  curveVertex(270-b,352); 
  endShape(); 
  
  beginShape(); 
  curveVertex(305-b,350); 
  curveVertex(305-b,350); 
  curveVertex(312-b,348);
  curveVertex(307-b,344);
  curveVertex(308-b,349); 
  curveVertex(312-b,349);
  curveVertex(319-b,326);
  curveVertex(312-b,339);
  curveVertex(315-b,340);
  curveVertex(311-b,349);
  curveVertex(315-b,349);
  curveVertex(317-b,347);
  curveVertex(315-b,349);
  curveVertex(313-b,355);
  curveVertex(319-b,352);
  curveVertex(319-b,352);        
  endShape();
  
  
  beginShape();
  curveVertex(350-b,358); 
  curveVertex(350-b,358);
  curveVertex(406-b,352);
  curveVertex(381-b,370);
  curveVertex(378-b,358);
  curveVertex(376-b,367);
  curveVertex(369-b,359);
  curveVertex(397-b,384);
  curveVertex(399-b,370);
  curveVertex(360-b,385);
  curveVertex(371-b,382);
  curveVertex(350-b,358);
  curveVertex(374-b,390);
  curveVertex(370-b,373);
  curveVertex(386-b,389);
  curveVertex(384-b,377);
  curveVertex(398-b,383);
  curveVertex(414-b,384);
  curveVertex(415-b,387);
  curveVertex(413-b,392);
  curveVertex(407-b,398);
  curveVertex(407-b,398);
  endShape(); 
  
  stroke(0,0,106);
  
  ellipse(350-b,150,10,10);
  
  ellipse(350-b,150,2,2);
  
  
  
  
  if (mouseIsPressed) {
    if (c == 0){
      a+=speed1;
      b+=speed2;
      if(a>20){c=1;}
  }
    else if ( c == 1 ){
      a-=speed1;
      b-=speed2;
      if(a<0){c=0;}
     }
  }
  
}
