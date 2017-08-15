from django.utils import timezone
from unittest import loader
from django.template import loader
from django.http import HttpResponse
from games.models import Scores, Games


def savescore(request):

    username = request.POST.get("name", "")
    usermessage = request.POST.get("message", "")
    userdate = timezone.now()
    gameId = request.POST.get("game", "")
    usergame = Games.objects.get(id=gameId)
    userscore = request.POST.get("score", "")
    addScore = Scores(name = username , message = usermessage , date = userdate, score = userscore, game = usergame)
    addScore.save()
    return HttpResponse("ok")

def index(request):
    scores_list = Scores.objects.order_by('-date')[:]
    template = loader.get_template('games/index.html')
    context = {
        'scores_list': scores_list,
    }
    return HttpResponse(template.render(context, request))

def hangman(request):
    template = loader.get_template('games/hangman.html')
    context = {}
    return HttpResponse(template.render(context, request))

def personality(request):
    template = loader.get_template('games/personality.html')
    context = {}
    return HttpResponse(template.render(context, request))