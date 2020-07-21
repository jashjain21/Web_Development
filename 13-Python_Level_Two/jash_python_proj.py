import random
global suite
suite=['Heart','Diamond','Spade','Club']
global rank
rank=['2','3','4','5','6','7','8','9','1','J','Q','K','A']
class Deck():
    decks=[];
    def __init__(self):
        pass;
    def declare_deck(self):
        #ciuld use list comprehensions here too
        for item in suite:
            for value in rank:
                self.decks.append(value+' of '+item)
        random.shuffle(self.decks)
        return self.decks

class Hand():
    def __init__(self,player_deck,comp_deck):
         self.player_deck=player_deck
         self.comp_deck=comp_deck
    def draw_card(self):
        group_list=[self.player_deck[0],self.comp_deck[0]];
        player_deck.pop(0);
        comp_deck.pop(0);
        return group_list

def base_check(compare_list):
    if rank.index(compare_list[0][0])>rank.index(compare_list[1][0]):
        jash.player_deck.extend(compare_list)
        print(f"The added cards to player's deck are {compare_list}")
        return 'one';
    elif rank.index(compare_list[1][0])>rank.index(compare_list[0][0]):
        jash.comp_deck.extend(compare_list)
        print(f"The added cards to comp's deck are {compare_list}")
        return 'two';
    else:
        print('Since cards are same We will draw 2 more cards from each set ITS A WAR!!')
        return level_one_check(compare_list);

def level_one_check(compare_list):
    compare_list.extend(jash.draw_card())
    compare_list.extend(jash.draw_card())
    print_battle_cards([compare_list[4],compare_list[5]])
    if rank.index(compare_list[4][0])>rank.index(compare_list[5][0]):
        jash.player_deck.extend(compare_list)
        print(f"The added cards to player's deck are {compare_list}")
        return 'one';
    elif rank.index(compare_list[4][0])>rank.index(compare_list[4][0]):
        jash.comp_deck.extend(compare_list)
        print(f"The added cards to comp's deck are {compare_list}")
        return 'two';
    else:
        print('Since cards are same We will draw 2 more cards from each set ITS A DOUBLE WAR')
        return level_two_check(compare_list)

def level_two_check(compare_list):
    compare_list.extend(jash.draw_card())
    compare_list.extend(jash.draw_card())
    print_battle_cards([compare_list[10],compare_list[11]])
    if rank.index(compare_list[10][0])>rank.index(compare_list[11][0]):
        jash.player_deck.extend(compare_list)
        print(f"The added cards to player's deck are {compare_list}")
        return 'one'
    else :
        jash.comp_deck.extend(compare_list)
        print(f"The added cards to comp's deck are {compare_list}")
        return 'two';

def print_battle_cards(compare_list):
    print(f"The player's card is {compare_list[0]}\nThe computer's card is {compare_list[1]}")
    # print(f"The player's card is {compare_list[0][0]}\nThe computer's card is {compare_list[1][0]}")
    # print(f"The player's card is {rank.index(compare_list[0][0])}\nThe computer's card is {rank.index(compare_list[1][0])}")


print('Welcome to the War game')
game=Deck();
inst=game.declare_deck();
player_deck=inst[0:26:]
comp_deck=inst[26:52:]
jash=Hand(player_deck,comp_deck)
i=0
compare_list=[]
while i<20:
    compare_list=jash.draw_card()
    print_battle_cards(compare_list)
    if base_check(compare_list)=='one':
         print("congrats player wins this round")
    else:
         print("oops computer wins this round")
    print(f"The player 's deck has {len(jash.player_deck)} cards The comp's deck has {len(jash.comp_deck)} cards\n {i+1} round completed----------------")
    if len(jash.player_deck) <=0 or len(jash.comp_deck)<=0:
        break;
    else:
        compare_list=[]
        i+=1
        continue
