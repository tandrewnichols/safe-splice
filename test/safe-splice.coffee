describe 'safe-splice', ->
  Given -> @subject = require '../lib/safe-splice'

  Given -> @arr = [1, 2, 4]
  When -> @secondArr = @subject(@arr, 2, 0, 3)
  Then -> @secondArr.should.eql [1, 2, 3, 4]
  And -> @arr.should.eql [1, 2, 4]
