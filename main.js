var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_img_width = 20;
block_img_height = 20;

var player_object = "";
var block_img_object = "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(140);
        player_object.scaleToHeigth(140);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);

    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
        block_img_object = Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(block_img_object);

    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    if(keyPressed == '71')
    {
        new_image('hulk_face.png');
        console.log("g");
    }
    if(keyPressed == '72')
    {
        new_image('hulk_left_hand.png');
        console.log("h");
    }
    if(keyPressed == '74')
    {
        new_image('hulk_legs.png');
        console.log("j");
    }
    if(keyPressed == '75')
    {
        new_image('hulk_right_hand.png');
        console.log("k");
    }
    if(keyPressed == '76')
    {
        new_image('hulkd_body.png');
        console.log("l");
    }
    if(keyPressed == '90')
    {
        new_image('ironman_body.png');
        console.log("z");
    }
    if(keyPressed == '88')
    {
        new_image('ironman_face.png');
        console.log("x");
    }
    if(keyPressed == '67')
    {
        new_image('ironman_left_hand.png');
        console.log("c");
    }
    if(keyPressed == '86')
    {
        new_image('ironman_legs.png');
        console.log("v");
    }
}
function up()
{
if(player_y >=0){
player_y = player_y - block_image_height;
console.log("block image height = " + block_image_height);
console.log("When Up arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
canvas.remove(player_object);
player_update();
}
}

function down()
{
if(player_y <=500)
{
player_y = player_y + block_image_height;
console.log("block image height = " + block_image_height);
console.log("When Down arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
canvas.remove(player_object);
player_update();
}
}

function left()
{
if(player_x >0)
{
player_x = player_x - block_image_width;
console.log("block image width = " + block_image_width);
console.log("When Left arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
canvas.remove(player_object);
player_update();
}
}

function right()
{
if(player_x <=850)
{
player_x = player_x + block_image_width;
console.log("block image width = " + block_image_width);
console.log("When Right arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
canvas.remove(player_object);
player_update();
}
}