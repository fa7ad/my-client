<?php
/**
 * NogorAds backend
 * @author Fahad Hossain<8bit.demoncoder@gmail.com>
 * @license Proprietary EULA
 * Date: 3/3/15
 * Time: 3:31 PM
 */
// Secret = secret > md5 > sha256 > base64 > truncate 50
define('SITE_SECRET', "ODZkMmYyZjMxODIyNzlkYzNiZGI0ZThiYTYzMzI1ZDk3ODI1Yz");
// Authorization check
if (isset($_POST['secret']) && $_POST['secret'] == SITE_SECRET) {
    run_app();
} else {
    run_exception();
}
// global variable of database info
$db = array(
    'host' => 'localhost',
    'user' => 'nogorweb',
    'password' => 'i am a troll',
    'db' => 'nogorads',
    'table' => $_POST['name']
);
$sql = null;
static $message = '';

function run_app(){

}
function create_connection(){
    global $db,$sql;
    try {
        $sql = new PDO(
            'mysql:host='.$db['host'].';dbname='.$db['db'],
            $db['user'],
            $db['password']
        );
        return true;
    } catch (PDOException $e) {
        $message = "PDO database connection problem: " . $e->getMessage();
    } catch (Exception $e) {
        $message = "General problem: " . $e->getMessage();
    }
    return false;
}

function run_exception()
{
    ?>
    <h1 style="align-content: center; text-align: center; color: #f04124;">You are not permitted to use our API</h1>
<?php }
