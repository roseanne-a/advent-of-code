def whatFloor(instructions)
    currentFloor = 0
    if(instructions.length == 0) 
        puts "0"
    else
        instructions.each_char do |symbol|
            if(symbol == "(")
                currentFloor += 1
            elsif(symbol == ")") 
                currentFloor -= 1
            else
                return puts "Error"
            end
        end
        puts currentFloor
    end 
end