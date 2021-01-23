package controllers

import java.io.File

import akka.actor.TypedActor.dispatcher
import akka.actor.{Actor, ActorRef}
import com.google.inject.{Guice, Inject}
import play.api.mvc.{AbstractController, Action, AnyContent, ControllerComponents, WebSocket}
import javax.inject.Singleton
import play.api.libs.streams.ActorFlow
import play.twirl.api.HtmlFormat
import de.htwg.se.Tank.model.fileIoComponent.fileIoJsonImpl.FileIO
import de.htwg.se.Tank.model.playerComponent.playerBase.{Player, Position}

import scala.swing.Reactor
import akka.actor.{ActorRefFactory, ActorSystem}
import akka.stream.Materializer
import akka.actor._
import de.htwg.se.Tank.TankModule
import de.htwg.se.Tank.controller.controllerComponent.{ControllerInterface, Fire, Hit, NewGame, UpdateMap}
import de.htwg.se.Tank.model.gameComponent.gameBase.Map
import play.api.Play.materializer
import play.api.libs.json.{JsValue, Json}

import scala.collection.mutable.ListBuffer

@Singleton
class TankController @Inject()(cc: ControllerComponents)(implicit System: ActorSystem, mat:Materializer) extends AbstractController(cc) {
  final val WIDTH: Double = 1000
  final val HEIGHT: Double = 600
  final val XScale: Double = WIDTH / Map.endOfMap._1
  final val YScale: Double = HEIGHT / Map.endOfMap._2
  val injector = Guice.createInjector(new TankModule)
  val gamecontroller = injector.getInstance(classOf[ControllerInterface])
  gamecontroller.setGame("", 0, "small", "Sascha", "Yue")
  gamecontroller.publish(new NewGame)
  Map.activePlayer = Map.p1
  val fileIO = new FileIO
  var game = gamecontroller.getGame
  Map.setFX(Option(0))
  var d: List[(Double, Double)] = Map.getFXList(true);
  var mapcoordinates = getScale(d).toBuffer
  var posupdate = getPos(Map.p1.pos)

  def getScale(d:List[(Double, Double)]): List[Double] = {
    var l: ListBuffer[Double] = ListBuffer.empty
    d.foreach(d => l.append(d._1 * XScale, (Map.endOfMap._2 - d._2) * YScale))
    l.toList
  }

  def getPos(value: Position): ((Double), (Double)) = {
    (value.x * XScale, (Map.endOfMap._2 - value.y) * YScale)
  }

  def setParameter = {
    var player1 = Map.getPlayer(1)
    var player2 = Map.getPlayer(2)
    player1.pos = Position(240, 350)
    player2.pos = Position(1100, 350)
  }

  def startGame(): Unit = {
    gamecontroller.setGame("", 0, "small", "Sascha", "Yue")
    gamecontroller.publish(new NewGame)
    Map.activePlayer = Map.p1
  }

  def menu = Action {
    try {
      Ok.sendFile(new File("/app/public/TankFrontend/index.html"), inline = true)
    } catch {
      case e: NoSuchFieldException => Ok.sendFile(new File("./public/TrailRunnerFrontend/index.html"), inline = true)
    }
  }

  def about = Action {
    try {
      Ok.sendFile(new File("/app/public/TankFrontend/index.html"), inline = true)
    } catch {
      case e: NoSuchFieldException => Ok.sendFile(new File("./public/TrailRunnerFrontend/index.html"), inline = true)
    }
  }

  def controls = Action {
    try {
      Ok.sendFile(new File("/app/public/TankFrontend/index.html"), inline = true)
    } catch {
      case e: NoSuchFieldException => Ok.sendFile(new File("./public/TrailRunnerFrontend/index.html"), inline = true)
    }
  }

  def tank = Action {
    //startGame()
    try {
      Ok.sendFile(new File("/app/public/TankFrontend/index.html"), inline = true)
    } catch {
      case e: NoSuchFieldException => Ok.sendFile(new File("./public/TrailRunnerFrontend/index.html"), inline = true)
    }
  }

  def sendPosUpdate() = Action {
    Ok(Json.obj("update" -> posupdate))
  }

  def sendMapCoordinates() = Action {
    Ok(Json.obj("map" -> mapcoordinates))
  }

  def moveLeft = Action {
    gamecontroller.moveLeft()
    if (Map.moves == 0)
      game.changePlayer()
    Ok(fileIO.gameToJson(game))
  }

  def moveRight = Action {
    gamecontroller.moveRight()
    if (Map.moves == 0)
      game.changePlayer()
    Ok(fileIO.gameToJson(game))
  }
  /**
  def shoot = Action {
    gamecontroller.shoot(5)
    Ok(views.html.tank(gamecontroller))
  }

  def moveAngleUp = Action {
    gamecontroller.moveAngleUp()
    Ok(views.html.tank(gamecontroller))
  }

  def moveAngleDown = Action {
    gamecontroller.moveAngleUp()
    Ok(views.html.tank(gamecontroller))
  }
*/
  def changePlayer = Action {
    gamecontroller.changePlayer()
    try {
      Ok.sendFile(new File("/app/public/TankFrontend/index.html"), inline = true)
    } catch {
      case e: NoSuchFieldException => Ok.sendFile(new File("./public/TrailRunnerFrontend/index.html"), inline = true)
    }
  }

  def redo = Action {
    gamecontroller.redo
    try {
      Ok.sendFile(new File("/app/public/TankFrontend/index.html"), inline = true)
    } catch {
      case e: NoSuchFieldException => Ok.sendFile(new File("./public/TrailRunnerFrontend/index.html"), inline = true)
    }
  }

  def undo = Action {
    gamecontroller.undo
    try {
      Ok.sendFile(new File("/app/public/TankFrontend/index.html"), inline = true)
    } catch {
      case e: NoSuchFieldException => Ok.sendFile(new File("./public/TrailRunnerFrontend/index.html"), inline = true)
    }
  }

  def PowerPlus = Action {
    gamecontroller.powerUp()
    try {
      Ok.sendFile(new File("/app/public/TankFrontend/index.html"), inline = true)
    } catch {
      case e: NoSuchFieldException => Ok.sendFile(new File("./public/TrailRunnerFrontend/index.html"), inline = true)
    }
  }

  def PowerMinus = Action {
    gamecontroller.powerDown()
    try {
      Ok.sendFile(new File("/app/public/TankFrontend/index.html"), inline = true)
    } catch {
      case e: NoSuchFieldException => Ok.sendFile(new File("./public/TrailRunnerFrontend/index.html"), inline = true)
    }
  }

  def gameToJson() = Action {
    gamecontroller.save
    try {
      Ok.sendFile(new File("/app/public/TankFrontend/index.html"), inline = true)
    } catch {
      case e: NoSuchFieldException => Ok.sendFile(new File("./public/TrailRunnerFrontend/index.html"), inline = true)
    }
  }

  def socket = WebSocket.accept[JsValue, JsValue] { request =>
    ActorFlow.actorRef { out =>
      TankWebSocketActorFactory.create(out)
    }
  }

  object TankWebSocketActorFactory {
    def create(out: ActorRef) = {
      Props(new TankWebSocketActor(out))
    }
  }

  class TankWebSocketActor(out:ActorRef) extends Actor with Reactor {
    listenTo(gamecontroller)
    override def receive = {
      case msg: String =>
        out ! fileIO.gameToJson(game)
        println("Sent Json to Client" + msg)
      case "ping" => out ! Json.obj("alive" -> "pong")
    }

    reactions += {
      case event: NewGame => sendJsonToClient
      case event: UpdateMap => sendJsonToClient
      case event: Fire => sendJsonToClient
      case event: Hit => sendJsonToClient
    }

    def sendJsonToClient = {
      out ! fileIO.gameToJson(game)
    }
  }
}
